import { Form, Input, Table } from 'antd';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'antd/lib/form/Form';
import ListCard from '../../../../components/common/listcard/ListCard.tsx';
import {
  getHospitalsCategories,
  postHospitalCategory,
} from '../../../../models/hopital-category/hopital-category.ts';
import { HospitalsCategoryQueryKey } from '../../../../constants/query-key.ts';
import SubmitButton from '../../../../components/common/button/SubmitButton.tsx';
import { HospitalResponseData } from '../../../../models/hospital/hospital-search.ts';

interface FormValues {
  description: string;
}

interface HospitalCategoryProps {
  id?: string;
  show?: boolean;
  hospitalData?: HospitalResponseData;
}

export default function HospitalCategory({
  id,
  hospitalData,
}: HospitalCategoryProps) {
  const [form] = useForm();

  const { data, isLoading } = useQuery({
    queryKey: [HospitalsCategoryQueryKey.hospitalsCategories, id],
    queryFn: getHospitalsCategories,
    select: (data) => {
      return data?.data.data.map((item) => {
        return {
          value: item.id,
          label: item.description,
        };
      });
    },
    enabled: !!id,
  });

  const { mutate } = useMutation({
    mutationFn: postHospitalCategory,
  });

  const handleFinish = (values: FormValues) => {
    mutate({ id, data: values });
  };

  return (
    <ListCard title="전문과목" show>
      <Table
        rowKey="value"
        columns={[
          {
            title: 'id',
            dataIndex: 'value',
          },
          {
            title: '전문과목',
            dataIndex: 'label',
          },
        ]}
        dataSource={data}
      />
      <Form form={form} onFinish={handleFinish}>
        <Form.Item label="전문과목" name="description">
          <Input placeholder="전문과목" />
        </Form.Item>

        <SubmitButton isLoading={isLoading} />
      </Form>
    </ListCard>
  );
}
