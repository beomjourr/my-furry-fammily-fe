import { App, Form, InputNumber } from 'antd';
import { useMutation } from '@tanstack/react-query';
import SubmitButton from '../../../../../components/common/button/SubmitButton.tsx';
import { patchHospitalReviewRating } from '../../../../../models/hospital-review/hospital-review.ts';
import { queryClient } from '../../../../../main.tsx';
import { HospitalReviewQueryKey } from '../../../../../constants/query-key.ts';

const { useForm } = Form;

interface FormValues {
  rating_score: number;
}

interface ReviewRatingFormProps {
  id?: string;
}

export default function ReviewRatingForm({ id }: ReviewRatingFormProps) {
  const [form] = useForm();
  const { message } = App.useApp();

  const { mutate, isPending } = useMutation({
    mutationFn: patchHospitalReviewRating,
  });

  const handleFinish = (values: FormValues) => {
    const options = {
      onSuccess: () => {
        message.success('성공적으로 처리되었습니다.');
        queryClient.invalidateQueries({
          queryKey: [HospitalReviewQueryKey.hospitalReview, id],
        });
      },
      onError: () => {
        message.error('오류가 발생했습니다.');
      },
    };

    mutate(
      {
        animal_hospital_id: Number(id),
        rating_score: values.rating_score,
      },
      options,
    );
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        label="평점"
        name="rating_score"
        rules={[{ required: true, message: '평점을 입력해주세요.' }]}
      >
        <InputNumber max={5} precision={1} />
      </Form.Item>

      <SubmitButton isLoading={isPending} />
    </Form>
  );
}
