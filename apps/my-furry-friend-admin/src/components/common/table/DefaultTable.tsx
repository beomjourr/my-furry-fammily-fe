import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  Space,
  Table,
  TablePaginationConfig,
  TableProps,
} from 'antd';
import qs from 'query-string';
import { ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

interface IBasicTable<T> extends TableProps<T> {
  showSearch?: boolean;
  searchPlaceHolder?: string;
  searchKey?: string;
  total?: number;
  topButtons?: ReactNode[];
}

const BasicTable = <T extends object = any>({
  onChange,
  pagination,
  showSearch,
  searchKey,
  searchPlaceHolder,
  topButtons,
  total,
  ...props
}: IBasicTable<T>) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search) as Record<string, string>;
  const [searchKeyword, setSearchKeyword] = useState('');

  if (props.columns) {
    const { sort, order, page, pageSize, search, ...rest } = query;
    if (sort && order) {
      const column = props.columns.find(
        (c: any) => (c.dataIndex || c.key) === sort,
      );
      if (column) {
        column.defaultSortOrder = order === 'DESC' ? 'descend' : 'ascend';
      }
    }

    Object.entries(rest).forEach(([key, value]) => {
      if (props.columns) {
        const column = props.columns.find(
          (c: any) => (c.dataIndex || c.key) === key,
        );
        if (column) {
          column.defaultFilteredValue = Array.isArray(value) ? value : [value];
        }
      }
    });
  }

  const onChangeTable = (
    pagination: TablePaginationConfig,
    filters: Record<string, any>,
    sorter: Record<string, any>,
  ) => {
    const search: Record<string, any> = {
      ...query,
      page: pagination.current,
      pageSize: pagination.pageSize,
    };
    Object.entries(filters).forEach(([key]) => {
      if (filters[key]) {
        search[key] = filters[key];
      } else delete search[key];
    });
    if (sorter.field && sorter.order) {
      search.sort = sorter.columnKey || sorter.field;
      search.order = sorter.order === 'descend' ? 'DESC' : 'ASC';
    } else {
      delete search.sort;
      delete search.order;
    }
    navigate({
      pathname: location.pathname,
      search: qs.stringify(search),
    });
  };

  const onChangeSearch = () => {
    const search = { ...query };
    if (searchKey) {
      if (searchKeyword) search[searchKey] = searchKeyword;
      else delete search[searchKey];
    } else {
      if (searchKeyword) search.search = searchKeyword;
      else delete search.search;
    }

    navigate({
      pathname: location.pathname,
      search: qs.stringify(search),
    });
  };

  const renderPagenation = () => {
    if (!pagination) {
      return;
    }

    return {
      showSizeChanger: true,
      current: parseInt(query.page, 10),
      pageSize: parseInt(query.pageSize, 10),
      total,
    };
  };

  return (
    <>
      {(showSearch || topButtons) && (
        <StyledSearchButton>
          <Space>
            {showSearch && (
              <Space direction="horizontal">
                <Input.Search
                  style={{ width: 200 }}
                  placeholder={searchPlaceHolder || '검색'}
                  onSearch={onChangeSearch}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  value={searchKeyword}
                />
                <Button
                  style={{ width: 50 }}
                  onClick={() => {
                    setSearchKeyword('');
                    navigate(location.pathname);
                  }}
                >
                  <ReloadOutlined />
                </Button>
              </Space>
            )}
            {topButtons}
          </Space>
        </StyledSearchButton>
      )}
      <Table<T>
        {...props}
        pagination={renderPagenation()}
        onChange={onChange || onChangeTable}
      />
    </>
  );
};

export default BasicTable;

const StyledSearchButton = styled.div`
  margin-bottom: 20px;
  float: right;
`;
