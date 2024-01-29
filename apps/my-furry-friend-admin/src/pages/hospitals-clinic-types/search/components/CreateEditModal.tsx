import { App, Form, FormInstance, Input, Modal, ModalProps } from 'antd';
import { useCallback, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../../main.tsx';
import { HospitalsClinicTypeQueryKey } from '../../../../constants/query-key.ts';
import {
  AnimalHospitalsClinicTypeData,
  patchAnimalHospitalsClinicType,
  postAnimalHospitalsClinicType,
} from '../../../../models/hospitals-clinic-types/hospitals-clinic-types.ts';
import rules from '../../../../lib/rules.ts';
import ModalSubmitButton from '../../../../components/common/button/ModalSubmitButton.tsx';

interface CreateEditModalProps extends ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  record?: AnimalHospitalsClinicTypeData;
}

interface CreateOrEditFormProps {
  form: FormInstance;
  record?: AnimalHospitalsClinicTypeData;
  handleFinish: (value: AnimalHospitalsClinicTypeData) => void;
  isLoading: boolean;
  onCancel: () => void;
  okText?: string;
}

const CreateOrEditForm = ({
  form,
  record,
  handleFinish,
  isLoading,
  onCancel,
  okText,
}: CreateOrEditFormProps) => {
  const initFormValues = useCallback(() => {
    if (!record) {
      return;
    }

    form.setFieldsValue(record);
  }, [form, record]);

  useEffect(() => {
    form.resetFields();
    if (record) {
      initFormValues();
    }
  }, [form, initFormValues, record]);

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item label="id" name="id" hidden={!record}>
        <Input disabled />
      </Form.Item>
      <Form.Item label="진료 유형" name="clinic_type" rules={rules().required}>
        <Input />
      </Form.Item>
      <Form.Item label="진찰료" name="description" rules={rules().required}>
        <Input />
      </Form.Item>
      <ModalSubmitButton
        isLoading={isLoading}
        onCancel={onCancel}
        okText={okText}
      />
    </Form>
  );
};

export default function CreateEditModal({
  isOpen,
  record,
  onCancel,
  ...rest
}: CreateEditModalProps) {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const options = {
    onSuccess: () => {
      message.success('성공적으로 처리되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [HospitalsClinicTypeQueryKey.hospitalsClinicTypeSearch],
      });
      onCancel();
    },
    onError: () => {
      message.error('오류가 발생했습니다.');
    },
  };

  const {
    mutate: postAnimalHospitalsClinicTypeMutate,
    isPending: isPostPending,
  } = useMutation({
    mutationFn: postAnimalHospitalsClinicType,
    ...options,
  });

  const {
    mutate: patchAnimalHospitalsClinicTypeMutate,
    isPending: isPatchPending,
  } = useMutation({
    mutationFn: (data: AnimalHospitalsClinicTypeData) =>
      patchAnimalHospitalsClinicType(data.id, {
        clinic_type: data.clinic_type,
        description: data.description,
      }),
    ...options,
  });

  const handleFinish = (values: AnimalHospitalsClinicTypeData) => {
    if (record) {
      return patchAnimalHospitalsClinicTypeMutate(values);
    }
    return postAnimalHospitalsClinicTypeMutate(values);
  };

  return (
    <Modal
      title={`동물병원 진료 유형 ${record ? '수정' : '등록'}`}
      open={isOpen}
      destroyOnClose
      onCancel={onCancel}
      footer={null}
      {...rest}
    >
      <CreateOrEditForm
        form={form}
        record={record}
        handleFinish={handleFinish}
        isLoading={isPostPending || isPatchPending}
        onCancel={onCancel}
        okText={record ? '수정' : '등록'}
      />
    </Modal>
  );
}
