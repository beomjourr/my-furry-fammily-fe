import { Button, Table } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { HospitalsClinicFeeQueryKey } from '../../../../../constants/query-key.ts';
import ListCard from '../../../../../components/common/listcard/ListCard.tsx';
import {
  getHospitalClinicFees,
  HospitalClinicFeeResponseData,
} from '../../../../../models/hospital-clinic-fee/hospital-clinic-fee.ts';
import { HospitalResponseData } from '../../../../../models/hospital/hospital-search.ts';
import ClinicFeeForm from './ClinicFeeForm.tsx';
import ClinicFeeModal from './ClinicFeeModal.tsx';

interface ClinicFeeProps {
  id?: string;
  hospitalData?: HospitalResponseData;
}

export default function ClinicFee({ id }: ClinicFeeProps) {
  const { data: clinicFeeData } = useQuery({
    queryKey: [HospitalsClinicFeeQueryKey.hospitalsClinicFee, id],
    queryFn: () => getHospitalClinicFees(id),
    enabled: !!id,
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    record?: HospitalClinicFeeResponseData;
  }>({ isOpen: false });

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '진료유형',
      dataIndex: 'clinic_type_name',
    },
    {
      title: '동물정보',
      dataIndex: 'animal_name',
    },
    {
      title: '진료비 정보',
      dataIndex: 'cost_info',
    },
    {
      title: '수정',
      dataIndex: 'id',
      render: (value: string) => {
        return (
          <Button
            onClick={() =>
              setModalState({
                isOpen: true,
                record: clinicFeeData?.data.data.find(
                  (clinicFee) => clinicFee.id === value,
                ),
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
    <ListCard title="진료비" show>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={clinicFeeData?.data.data}
      />

      <ClinicFeeForm id={id} />

      <ClinicFeeModal
        {...modalState}
        onCancel={() =>
          setModalState({
            isOpen: false,
          })
        }
      />
    </ListCard>
  );
}
