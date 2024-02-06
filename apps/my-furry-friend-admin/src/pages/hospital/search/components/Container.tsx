import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Button, TableProps } from 'antd';
import { HospitalsQueryKey } from '../../../../constants/query-key.ts';
import {
  getAllHospitalSearch,
  HospitalRequestData,
} from '../../../../models/hospital/hospital-search.ts';
import BasicTable from '../../../../components/common/table/DefaultTable.tsx';
import useBreakPoint from '../../../../hooks/useBreakPoint.ts';

const Container = () => {
  const navigate = useNavigate();
  const screens = useBreakPoint('md');
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const scales = searchParams.getAll('scale');
  const { data } = useSuspenseQuery({
    queryKey: [HospitalsQueryKey.hospitalsSearch, name, scales],
    queryFn: () =>
      getAllHospitalSearch({
        ...(name && { name }),
        ...(scales.length > 0 && { scales }),
      }),
    select: ({ data }) => {
      return data?.data.cooperationAnimalHospitals.concat(
        data?.data.nonCooperationAnimalHospitals,
      );
    },
  });

  const columns: TableProps<HospitalRequestData>['columns'] = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
      responsive: ['md'],
    },
    {
      title: '병원명',
      dataIndex: 'name',
      fixed: 'left',
      width: screens ? 100 : 50,
    },
    {
      title: '주소',
      width: 300,
      render: (record) => {
        return (
          <>
            <div>주소: {record.street_address}</div>
            <div>{`좌표: ${record.latitude}, ${record.longitude}`}</div>
          </>
        );
      },
    },
    {
      title: '전화번호',
      dataIndex: 'tell',
      width: 200,
    },
    {
      title: '수의사수',
      dataIndex: 'veterinarian_numbers',
      render: (value: number) => `${value}명`,
      width: 100,
    },
    {
      title: '지역',
      dataIndex: 'region',
      width: 100,
      responsive: ['md'],
    },
    {
      title: '규모',
      dataIndex: 'scale',
      width: 100,
      filters: [
        { text: '1차 병원', value: 'SMALL' },
        { text: '2차 병원', value: 'MEDIUM' },
        { text: '3차 병원', value: 'LARGE' },
        { text: '24시 병원', value: 'ALWAYS' },
      ],
    },
    {
      title: '협력여부',
      dataIndex: 'is_cooperation',
      render: (value: boolean) => (value ? '협력 병원' : '일반 병원'),
      width: 100,
      filterMultiple: false,
      filters: [
        { text: '협력 병원', value: true },
        { text: '일반 병원', value: false },
      ],
      onFilter: (value, record) => record.is_cooperation === value,
      responsive: ['md'],
    },
    {
      title: '수정',
      dataIndex: 'id',
      fixed: 'right',
      width: 60,
      render: (id: number) => (
        <Button onClick={() => navigate(`/hospital/register/edit/${id}`)}>
          수정
        </Button>
      ),
    },
    {
      title: '옵션 수정',
      dataIndex: 'id',
      fixed: 'right',
      width: 60,
      render: (id: number) => (
        <Button onClick={() => navigate(`/hospital/register/options/${id}`)}>
          옵션 수정
        </Button>
      ),
    },
  ];

  return (
    <BasicTable
      bordered
      searchKey="name"
      searchPlaceHolder="병원명을 입력해주세요."
      showSearch
      virtual
      scroll={{ x: 1500, y: 700 }}
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default Container;
