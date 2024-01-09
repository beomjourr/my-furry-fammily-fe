import { Form, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Default from './components/default.tsx';
import Categories from './components/categories.tsx';
import { useMutation } from '@tanstack/react-query';
import {
  HospitalRequestData,
  postHospital,
} from '../../../models/hospital/hospital-search.ts';
import SubmitButton from '../../../components/common/button/SubmitButton.tsx';
import { queryClient } from '../../../main.tsx';
import { QueryKey } from '../../../constants/query-key.ts';

interface FormValues extends Omit<Partial<HospitalRequestData>, 'id'> {
  address: string;
  detail_address: string;
}

const HospitalRegister = () => {
  const [form] = useForm<FormValues>();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: Omit<Partial<HospitalRequestData>, 'id'>) =>
      postHospital(data),
    onSuccess: () => {
      message.success('성공적으로 처리되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [QueryKey.hospitalSearch],
      });
    },
    onError: () => {
      message.error('오류가 발생했습니다.');
    },
  });

  const handleFinish = (values: FormValues) => {
    form.setFieldValue(
      'street_address',
      `${values.address} ${values.detail_address}`,
    );

    mutate({
      name: values.name,
      tell: values.tell,
      veterinarian_numbers: values.veterinarian_numbers,
      longitude: values.longitude,
      latitude: values.latitude,
      scale: values.scale,
      is_cooperation: values.is_cooperation,
      region: values.region,
      street_address: `${values.address} ${values.detail_address}`,
    });
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Default form={form} />
      <Categories />
      <SubmitButton isLoading={isPending} />
    </Form>
  );
};

export default HospitalRegister;
