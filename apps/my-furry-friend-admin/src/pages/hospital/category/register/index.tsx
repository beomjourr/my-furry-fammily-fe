import { Form, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import SubmitButton from '../../../../components/common/button/SubmitButton.tsx';
import Default from './components/default.tsx';
import { useMutation } from '@tanstack/react-query';
import { patchHospitalCategory } from '../../../../models/hospital/hospital-search.ts';
import { QueryKey } from '../../../../constants/query-key.ts';
import { queryClient } from '../../../../main.tsx';

interface FormValues {
  id: number;
  category: string;
}

const CategoryRegister = () => {
  const [form] = useForm<FormValues>();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => patchHospitalCategory(data),
    onSuccess: () => {
      message.success('성공적으로 처리되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [QueryKey.hospitalCategories],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.hospitalSearchConditions],
      });
    },
    onError: () => {
      message.error('오류가 발생했습니다.');
    },
  });

  const handleFinish = (values: FormValues) => {
    mutate(values);
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Default />
      <SubmitButton isLoading={isPending} />
    </Form>
  );
};

export default CategoryRegister;
