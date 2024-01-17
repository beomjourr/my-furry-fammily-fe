import { Button, Form, Input } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../models/auth/auth.ts';

interface FormValues {
  account_id: string;
  password: string;
}

export default function AuthForm() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => postLogin(data),
  });

  const handleFinish = (values: FormValues) => {
    mutate(values, {
      onSuccess: (data) => {
        const { access_token, refresh_token } = data.data.data;

        sessionStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        navigate('/', { replace: true });
      },
    });
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleFinish}
    >
      <Form.Item
        label="아이디"
        name="account_id"
        rules={[{ required: true, message: '아이디를 입력해주세요' }]}
      >
        <Input placeholder="아이디를 입력해주세요" />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
      >
        <Input.Password placeholder="비밀번호를 입력해주세요" maxLength={40} />
      </Form.Item>

      <Button
        style={{ width: '100%' }}
        type="primary"
        htmlType="submit"
        loading={isPending}
      >
        로그인
      </Button>
    </Form>
  );
}
