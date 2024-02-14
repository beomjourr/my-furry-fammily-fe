import { App, Form, Input, Switch } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import SearchSelect from '../../../../../components/common/select/SearchSelect.tsx';
import SubmitButton from '../../../../../components/common/button/SubmitButton.tsx';
import { queryClient } from '../../../../../main.tsx';
import {
  AnimalInfoQueryKey,
  HospitalsClinicFeeQueryKey,
  HospitalsClinicTypeQueryKey,
} from '../../../../../constants/query-key.ts';
import { getAnimalHospitalsClinicType } from '../../../../../models/hospitals-clinic-types/hospitals-clinic-types.ts';
import { getAnimal } from '../../../../../models/animal-info/animal-info.ts';
import {
  HospitalClinicFeeResponseData,
  patchHospitalClinicFee,
  postHospitalClinicFee,
} from '../../../../../models/hospital-clinic-fee/hospital-clinic-fee.ts';

interface FormValues {
  clinic_type_category: string;
  clinic_cost_info: string;
  clinic_type_id: number;
  animal_id: number;
}

interface ClinicFeeFormProps {
  id?: string;
  type?: 'create' | 'edit';
  record?: HospitalClinicFeeResponseData;
}

export default function ClinicFeeForm({
  id,
  type = 'create',
  record,
}: ClinicFeeFormProps) {
  const [form] = useForm();
  const { message } = App.useApp();

  useEffect(() => {
    if (type === 'edit' && record) {
      form.setFieldsValue({
        clinic_type_category: record.clinic_type_category,
        clinic_cost_info: record.cost_info,
        clinic_type_id: record.clinic_type_id,
        animal_id: record.animal_id,
      });
    }
  }, [form, record, type]);

  const { data: clinicTypeData } = useQuery({
    queryKey: [HospitalsClinicTypeQueryKey.hospitalsClinicTypeSearch],
    queryFn: getAnimalHospitalsClinicType,
    enabled: !!id,
    select: (data) => {
      return data?.data.data.map((item) => {
        return {
          value: item.id,
          label: item.description,
        };
      });
    },
  });

  const { data: animalData } = useQuery({
    queryKey: [AnimalInfoQueryKey.animalInfoSearch],
    queryFn: getAnimal,
    enabled: !!id,
    select: (data) => {
      return data?.data.data.map((item) => {
        return {
          value: item.id,
          label: `${item.type}, ${item.weight}, ${item.description}`,
        };
      });
    },
  });

  const { mutate: postClinicFeeMutate, isPending: isPostClinicFeePending } =
    useMutation({
      mutationFn: postHospitalClinicFee,
    });

  const { mutate: patchClinicFeeMutate, isPending: isPatchClinicFeePending } =
    useMutation({
      mutationFn: patchHospitalClinicFee,
    });

  const handleFinish = (values: FormValues) => {
    const options = {
      onSuccess: () => {
        message.success('성공적으로 처리되었습니다.');
        queryClient.invalidateQueries({
          queryKey: [HospitalsClinicFeeQueryKey.hospitalsClinicFee, id],
        });
      },
      onError: () => {
        message.error('오류가 발생했습니다.');
      },
    };

    if (type === 'edit' && record) {
      return patchClinicFeeMutate(
        {
          hospitalId: id,
          clinicFeeId: record.id,
          data: values,
        },
        options,
      );
    }

    return postClinicFeeMutate(
      {
        id,
        data: values,
      },
      options,
    );
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        label="진료타입"
        name="clinic_type_id"
        rules={[{ required: true, message: '진료타입을 선택해주세요.' }]}
      >
        <SearchSelect data={clinicTypeData} />
      </Form.Item>

      <Form.Item
        label="동물정보"
        name="animal_id"
        rules={[{ required: true, message: '동물정보를 선택해주세요.' }]}
      >
        <SearchSelect data={animalData} />
      </Form.Item>

      <Form.Item
        label="진료비 정보"
        name="clinic_cost_info"
        rules={[{ required: true, message: '진료비정보를 입력해주세요..' }]}
      >
        <Input placeholder="진료비 정보를 입력해주세요." />
      </Form.Item>

      <Form.Item
        initialValue={false}
        label="진료비"
        name="clinic_type_category"
      >
        <Switch />
      </Form.Item>

      <SubmitButton
        isLoading={isPostClinicFeePending || isPatchClinicFeePending}
      />
    </Form>
  );
}
