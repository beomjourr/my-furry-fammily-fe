import { Form, Select } from 'antd';
import { useQuery } from '@tanstack/react-query';
import rules from '../../../../../lib/rules.ts';
import ListCard from '../../../../../components/common/listcard/ListCard.tsx';
import {
  getHospitalCategories,
  getHospitalSearch,
} from '../../../../../models/hospital/hospital-search.ts';
import { QueryKey } from '../../../../../constants/query-key.ts';

const Default = () => {
  const { data } = useQuery({
    queryKey: [QueryKey.hospitalSearch],
    queryFn: () => getHospitalSearch(),
    select: ({ data }) => {
      return data?.data.cooperationAnimalHospitals.concat(
        data?.data.nonCooperationAnimalHospitals,
      );
    },
  });
  const { data: categoriesData } = useQuery({
    queryKey: [QueryKey.hospitalCategories],
    queryFn: () => getHospitalCategories(),
  });

  return (
    <ListCard required show>
      <Form.Item label="병원명" name="id" rules={rules().required}>
        <Select
          placeholder="병원을 선택해주세요."
          options={data?.map((el) => ({
            label: `${el.name} - ${el.street_address}`,
            value: el.id,
          }))}
        />
      </Form.Item>

      <Form.Item label="카테고리" name="category" rules={rules().required}>
        <Select
          placeholder="카테고리를 입력해주세요."
          options={categoriesData?.data.data.map((el) => ({
            label: el.value,
            value: el.key,
          }))}
        />
      </Form.Item>
    </ListCard>
  );
};

export default Default;
