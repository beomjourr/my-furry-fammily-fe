import { Modal } from 'antd';
import ReviewRatingForm from './ReviewRatingForm.tsx';

interface ReviewRatingModalProps {
  id?: string;
  isOpen: boolean;
  onCancel: () => void;
}

export default function ReviewRatingModal({
  id,
  isOpen,
  onCancel,
  ...rest
}: ReviewRatingModalProps) {
  return (
    <Modal
      title="리뷰 평점"
      open={isOpen}
      destroyOnClose
      onCancel={onCancel}
      footer={null}
      {...rest}
    >
      <ReviewRatingForm id={id} />
    </Modal>
  );
}
