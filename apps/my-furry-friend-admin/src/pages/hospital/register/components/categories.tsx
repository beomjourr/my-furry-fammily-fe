import { Form, Radio, Select } from 'antd';
import { useQuery } from '@tanstack/react-query';
import ListCard from '../../../../components/common/listcard/ListCard.tsx';
import rules from '../../../../lib/rules.ts';
import {
  getHospitalRegions,
  getHospitalScales,
} from '../../../../models/hospital/hospital-search.ts';
import { QueryKey } from '../../../../constants/query-key.ts';

interface CategoriesProps {
  show?: boolean;
}

const Categories = ({ show = true }: CategoriesProps) => {
  const { data: scalesData } = useQuery({
    queryKey: [QueryKey.hospitalScales],
    queryFn: () => getHospitalScales(),
  });
  const { data: regionsData } = useQuery({
    queryKey: [QueryKey.hospitalRegions],
    queryFn: () => getHospitalRegions(),
  });

  return (
    <ListCard title="카테고리" required show={show}>
      <Form.Item
        initialValue={true}
        required
        label="협력 여부"
        name="is_cooperation"
        rules={rules().required}
      >
        <Radio.Group>
          <Radio value={true}>협력 병원</Radio>
          <Radio value={false}>일반 병원</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="병원 규모" name="scale" rules={rules().required}>
        <Select
          placeholder="규모를 선택해주세요."
          options={scalesData?.data.data.map((el) => ({
            label: el.value,
            value: el.key,
          }))}
        />
      </Form.Item>
      <Form.Item label="지역" name="region" rules={rules().required}>
        <Select
          placeholder="지역을 선택해주세요."
          options={regionsData?.data.data.map((el) => ({
            label: el.value,
            value: el.key,
          }))}
        />
      </Form.Item>
    </ListCard>
  );
};

export default Categories;
