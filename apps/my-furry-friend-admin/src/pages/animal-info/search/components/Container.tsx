import { useSuspenseQuery } from '@tanstack/react-query';
import { Button, TableProps } from 'antd';
import { useState } from 'react';
import { AnimalInfoQueryKey } from '../../../../constants/query-key.ts';
import BasicTable from '../../../../components/common/table/DefaultTable.tsx';
import {
  AnimalInfoResponseData,
  getAnimal,
} from '../../../../models/animal-info/animal-info.ts';
import CreateEditModal from './CreateEditModal.tsx';

const Container = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    record?: AnimalInfoResponseData;
  }>({ isOpen: false });

  const { data } = useSuspenseQuery({
    queryKey: [AnimalInfoQueryKey.animalInfoSearch],
    queryFn: getAnimal,
  });

  const columns: TableProps<AnimalInfoResponseData>['columns'] = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '타입',
      dataIndex: 'type',
    },
    {
      title: '무게',
      dataIndex: 'weight',
    },
    {
      title: '종류',
      dataIndex: 'description',
    },
    {
      title: '수정',
      render: (value: AnimalInfoResponseData) => {
        return (
          <Button
            onClick={() =>
              setModalState({
                isOpen: true,
                record: value,
              })
            }
          >
            수정
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <BasicTable
        topButtons={[
          <Button
            key="create"
            type="primary"
            onClick={() => setModalState({ isOpen: true })}
          >
            등록
          </Button>,
        ]}
        bordered
        rowKey="id"
        columns={columns}
        dataSource={data?.data.data}
        pagination={false}
      />

      <CreateEditModal
        {...modalState}
        onCancel={() =>
          setModalState({
            isOpen: false,
          })
        }
      />
    </>
  );
};

export default Container;
