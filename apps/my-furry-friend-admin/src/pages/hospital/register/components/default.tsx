import ListCard from '../../../../components/common/listcard/ListCard.tsx';
import { Form, FormInstance, Input, InputNumber } from 'antd';
import AddressInput from '../../../../components/common/input/AddressInput.tsx';
import rules from '../../../../lib/rules.ts';
import PhoneInput from '../../../../components/common/input/PhoneInput.tsx';

interface DefaultProps {
  form: FormInstance;
  show?: boolean;
}

const Default = ({ form, show = true }: DefaultProps) => {
  return (
    <ListCard title="기본정보" required show={show}>
      <Form.Item label="병원명" name="name" rules={rules().required}>
        <Input placeholder="병원명을 입력해주세요." />
      </Form.Item>

      <PhoneInput form={form} />

      <Form.Item
        label="수의사 수"
        name="veterinarian_numbers"
        rules={rules().required}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
          placeholder="수의사 수를 입력해주세요."
        />
      </Form.Item>

      <AddressInput form={form} />

      <Form.Item label="경도" name="longitude" rules={rules().required}>
        <Input disabled />
      </Form.Item>
      <Form.Item label="위도" name="latitude" rules={rules().required}>
        <Input disabled />
      </Form.Item>
    </ListCard>
  );
};

export default Default;
