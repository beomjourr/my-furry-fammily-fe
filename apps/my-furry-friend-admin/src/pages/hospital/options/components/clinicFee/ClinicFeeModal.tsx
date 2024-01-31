import { Modal, ModalProps } from 'antd';
import { HospitalClinicFeeResponseData } from '../../../../../models/hospital-clinic-fee/hospital-clinic-fee.ts';
import ClinicFeeForm from './ClinicFeeForm.tsx';

interface CreateEditModalProps extends ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  record?: HospitalClinicFeeResponseData;
}

export default function ClinicFeeModal({
  isOpen,
  record,
  onCancel,
  ...rest
}: CreateEditModalProps) {
  return (
    <Modal
      title="진료비 수정"
      open={isOpen}
      destroyOnClose
      onCancel={onCancel}
      footer={null}
      {...rest}
    >
      <ClinicFeeForm
        type="edit"
        id={record?.animal_hospital_id}
        record={record}
      />
    </Modal>
  );
}
