import { Button, Row, Space } from 'antd';

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
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
        >
          등록
        </Button>
        <Button type="default" size="large" onClick={() => {}}>
          취소
        </Button>
      </Space>
    </Row>
  );
};

export default SubmitButton;
