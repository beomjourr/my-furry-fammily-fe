import { App, Form, FormInstance, Input, Modal, ModalProps } from 'antd';
import { useCallback, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  AnimalInfoRequestData,
  AnimalInfoResponseData,
  patchAnimal,
  postAnimal,
} from '../../../../models/animal-info/animal-info.ts';
import { queryClient } from '../../../../main.tsx';
import { AnimalInfoQueryKey } from '../../../../constants/query-key.ts';
import rules from '../../../../lib/rules.ts';
import ModalSubmitButton from '../../../../components/common/button/ModalSubmitButton.tsx';

interface CreateEditModalProps extends ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  record?: AnimalInfoResponseData;
}

interface CreateOrEditFormProps {
  form: FormInstance;
  record?: AnimalInfoResponseData;
  handleFinish: (value: AnimalInfoRequestData) => void;
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

    const { id, type, weight, description } = record;
    const initialValues = {
      id,
      animal_type: type,
      animal_weight: weight,
      animal_description: description,
    };

    form.setFieldsValue(initialValues);
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
      <Form.Item label="타입" name="animal_type" rules={rules().required}>
        <Input />
      </Form.Item>
      <Form.Item label="무게" name="animal_weight" rules={rules().required}>
        <Input />
      </Form.Item>
      <Form.Item
        label="종류"
        name="animal_description"
        rules={rules().required}
      >
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
        queryKey: [AnimalInfoQueryKey.animalInfoSearch],
      });
      onCancel();
    },
    onError: () => {
      message.error('오류가 발생했습니다.');
    },
  };

  const { mutate: postAnimalInfoMutate, isPending: isPostPending } =
    useMutation({
      mutationFn: postAnimal,
      ...options,
    });

  const { mutate: patchAnimalInfoMutate, isPending: isPatchPending } =
    useMutation({
      mutationFn: (data: AnimalInfoRequestData) =>
        patchAnimal(data.id, {
          animal_type: data.animal_type,
          animal_weight: data.animal_weight,
          animal_description: data.animal_description,
        }),
      ...options,
    });

  const handleFinish = (values: AnimalInfoRequestData) => {
    if (record) {
      return patchAnimalInfoMutate(values);
    }
    return postAnimalInfoMutate(values);
  };

  return (
    <Modal
      title={`동물 정보 ${record ? '수정' : '등록'}`}
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
