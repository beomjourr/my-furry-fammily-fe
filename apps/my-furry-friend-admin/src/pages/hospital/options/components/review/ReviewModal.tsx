import { Modal, ModalProps } from 'antd';
import { ReviewContent } from '../../../../../models/hospital-review/hospital-review.ts';
import ReviewForm from './ReviewForm.tsx';

interface CreateEditModalProps extends ModalProps {
  id?: string;
  isOpen: boolean;
  onCancel: () => void;
  record?: ReviewContent;
  type?: 'create' | 'edit';
}

export default function ReviewModal({
  id,
  isOpen,
  record,
  onCancel,
  type = 'create',
  ...rest
}: CreateEditModalProps) {
  return (
    <Modal
      title={`리뷰 ${type === 'create' ? '등록' : '수정'}`}
      open={isOpen}
      destroyOnClose
      onCancel={onCancel}
      footer={null}
      {...rest}
    >
      <ReviewForm id={id} record={record} type={type} />
    </Modal>
  );
}
