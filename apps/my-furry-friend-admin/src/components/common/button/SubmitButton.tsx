import { Button, ButtonProps, Row, Space } from 'antd';

interface SubmitButtonProps extends ButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading, ...rest }: SubmitButtonProps) => {
  return (
    <Row
      style={{
        marginBottom: '20px',
      }}
      justify="end"
    >
      <Space>
        <Button
          loading={isLoading}
          type="primary"
          htmlType="submit"
          size="large"
          {...rest}
        >
          등록
        </Button>
      </Space>
    </Row>
  );
};

export default SubmitButton;
