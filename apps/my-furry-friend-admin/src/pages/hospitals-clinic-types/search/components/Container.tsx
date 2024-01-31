import { useSuspenseQuery } from '@tanstack/react-query';
import { Button, TableProps } from 'antd';
import { useState } from 'react';
import { HospitalsClinicTypeQueryKey } from '../../../../constants/query-key.ts';
import BasicTable from '../../../../components/common/table/DefaultTable.tsx';
import {
  AnimalHospitalsClinicTypeData,
  getAnimalHospitalsClinicType,
} from '../../../../models/hospitals-clinic-types/hospitals-clinic-types.ts';
import CreateEditModal from './CreateEditModal.tsx';

const Container = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    record?: AnimalHospitalsClinicTypeData;
  }>({ isOpen: false });

  const { data } = useSuspenseQuery({
    queryKey: [HospitalsClinicTypeQueryKey.hospitalsClinicTypeSearch],
    queryFn: getAnimalHospitalsClinicType,
  });

  const columns: TableProps<AnimalHospitalsClinicTypeData>['columns'] = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '진료 유형',
      dataIndex: 'clinic_type',
    },
    {
      title: '진찰료',
      dataIndex: 'description',
    },
    {
      title: '수정',
      render: (value: AnimalHospitalsClinicTypeData) => {
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
