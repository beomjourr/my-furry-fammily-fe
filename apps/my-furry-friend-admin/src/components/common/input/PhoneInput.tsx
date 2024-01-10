import { Form, FormInstance, Input } from 'antd';
import { useEffect } from 'react';
import rules from '../../../lib/rules.ts';

interface PhoneInputProps {
  form: FormInstance;
}

const PhoneInput = ({ form }: PhoneInputProps) => {
  const phoneValue = Form.useWatch('tell', form);

  useEffect(() => {
    if (phoneValue) {
      const phone = phoneValue.replace(/[^0-9]/g, '');

      if (phone.length === 11) {
        form.setFieldsValue({
          tell: phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
        });
      } else if (phone.length === 10) {
        form.setFieldsValue({
          tell: phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
        });
      } else if (phone.length === 9) {
        form.setFieldsValue({
          tell: phone.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3'),
        });
      }
    }
  }, [form, phoneValue]);

  return (
    <Form.Item label="전화번호" name="tell" rules={[...rules().required]}>
      <Input placeholder="전화번호를 입력해주세요." />
    </Form.Item>
  );
};

export default PhoneInput;
