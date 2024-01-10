import { Button, Layout, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

interface ErrorLayoutProps {
  status?: string;
  message?: string;
  buttonText?: string;
  buttonAction?: () => void;
}

const ErrorLayout = ({
  status = '404',
  message = '없는 페이지 입니다.',
  buttonText = '홈으로',
  buttonAction,
}: ErrorLayoutProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonAction) {
      return buttonAction();
    }
    return navigate('/');
  };

  return (
    <Layout>
      <Content>
        <Result
          status="error"
          title={status}
          subTitle={message}
          extra={
            <Button type="primary" onClick={handleButtonClick}>
              {buttonText}
            </Button>
          }
        />
      </Content>
    </Layout>
  );
};

export default ErrorLayout;
