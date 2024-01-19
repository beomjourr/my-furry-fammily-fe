import { Button, Row, Space } from 'antd';

export interface ModalSubmitButtonProps {
  onCancel: () => void;
  isLoading: boolean;
  okText?: string;
  cancelText?: string;
}

export default function ModalSubmitButton({
  okText = '확인',
  onCancel,
  cancelText = '취소',
  isLoading,
}: ModalSubmitButtonProps) {
  return (
    <Row justify="end">
      <Space>
        <Button htmlType="button" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button loading={isLoading} type="primary" htmlType="submit">
          {okText}
        </Button>
      </Space>
    </Row>
  );
}
