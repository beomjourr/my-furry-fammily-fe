import { Form, FormInstance, Input, InputNumber, Switch } from 'antd';
import ListCard from '../../../../components/common/listcard/ListCard.tsx';
import AddressInput from '../../../../components/common/input/AddressInput.tsx';
import PhoneInput from '../../../../components/common/input/PhoneInput.tsx';

interface DefaultProps {
  form: FormInstance;
  show?: boolean;
}

const Default = ({ form, show = true }: DefaultProps) => {
  return (
    <ListCard title="기본정보" required show={show}>
      <Form.Item label="병원명" name="name">
        <Input placeholder="병원명을 입력해주세요." />
      </Form.Item>

      <PhoneInput form={form} />

      <Form.Item label="수의사 수" name="veterinarian_numbers">
        <InputNumber
          style={{
            width: '100%',
          }}
          placeholder="수의사 수를 입력해주세요."
        />
      </Form.Item>

      <AddressInput form={form} />

      <Form.Item label="경도" name="longitude">
        <Input disabled />
      </Form.Item>

      <Form.Item label="위도" name="latitude">
        <Input disabled />
      </Form.Item>

      <Form.Item label="MRI 보유" name="has_mri">
        <Switch checkedChildren="있음" unCheckedChildren="없음" />
      </Form.Item>

      <Form.Item label="CT 보유" name="has_ct">
        <Switch checkedChildren="있음" unCheckedChildren="없음" />
      </Form.Item>
    </ListCard>
  );
};

export default Default;
