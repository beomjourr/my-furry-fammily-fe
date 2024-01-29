import { App, DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import dayjs from 'dayjs';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import {
  patchHospitalReview,
  postHospitalReview,
  ReviewContent,
} from '../../../../../models/hospital-review/hospital-review.ts';
import SubmitButton from '../../../../../components/common/button/SubmitButton.tsx';
import { queryClient } from '../../../../../main.tsx';
import { HospitalReviewQueryKey } from '../../../../../constants/query-key.ts';

const { useForm } = Form;

interface FormValues {
  animal_hospital_id: number;
  number_of_visits: number;
  written_at: number;
  content: string;
  origin_type: string;
}

interface ReviewFormProps {
  id?: string;
  type?: 'create' | 'edit';
  record?: ReviewContent;
}

export default function ReviewForm({
  id,
  type = 'create',
  record,
}: ReviewFormProps) {
  const [form] = useForm<FormValues>();
  const { message } = App.useApp();

  useEffect(() => {
    if (type === 'edit' && record) {
      form.setFieldsValue({
        content: record.content,
        origin_type: record.origin_type === '영수증' ? 'RECEIPT' : 'PAYMENT',
        number_of_visits: record.number_of_visits,
      });
    }
  }, [form, record, type]);

  const {
    mutate: postHospitalReviewMutate,
    isPending: isPostHospitalReviewPending,
  } = useMutation({
    mutationFn: postHospitalReview,
  });

  const {
    mutate: patchHospitalReviewMutate,
    isPending: isPatchHospitalReviewPending,
  } = useMutation({
    mutationFn: patchHospitalReview,
  });

  const handleFinish = (values: FormValues) => {
    const written_at = dayjs(values.written_at).format('YYYY-MM-DD').split('-');

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

    if (type === 'edit' && record) {
      return patchHospitalReviewMutate(
        {
          reviewId: record.id,
          data: {
            number_of_visits: values.number_of_visits,
            content: values.content,
            origin_type: values.origin_type,
            written_at: written_at.map(Number),
          },
        },
        options,
      );
    }

    return postHospitalReviewMutate(
      {
        animal_hospital_id: Number(id),
        number_of_visits: values.number_of_visits,
        content: values.content,
        origin_type: values.origin_type,
        written_at: written_at.map(Number),
      },
      options,
    );
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        label="내용"
        name="content"
        rules={[{ required: true, message: '내용을 입력해주세요.' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="타입"
        name="origin_type"
        rules={[{ required: true, message: '타입을 입력해주세요.' }]}
      >
        <Radio.Group>
          <Radio value="RECEIPT">영수증</Radio>
          <Radio value="PAYMENT">결제내역</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="방문객수"
        name="number_of_visits"
        rules={[{ required: true, message: '방문객수를 입력해주세요.' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="작성일"
        name="written_at"
        rules={[{ required: true, message: '작성일을 선택해주세요.' }]}
      >
        <DatePicker />
      </Form.Item>

      <SubmitButton
        isLoading={isPostHospitalReviewPending || isPatchHospitalReviewPending}
      />
    </Form>
  );
}
