import { Form, Radio, Switch, UploadFile } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useMutation } from '@tanstack/react-query';
import ListCard from '../../../../components/common/listcard/ListCard.tsx';
import FileUpload from '../../../../components/common/fileUpload/FileUpload.tsx';
import SubmitButton from '../../../../components/common/button/SubmitButton.tsx';
import { postImage } from '../../../../models/image/image.ts';

interface FormValues {
  file: UploadFile[];
  animal_hospital_id: number;
  image_type: 'MAIN' | 'SHEET';
  is_thumbnail: boolean;
}

interface ImageProps {
  id?: string;
}

export default function Image({ id }: ImageProps) {
  const [form] = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: postImage,
  });

  const handleFinish = (values: FormValues) => {
    const json = JSON.stringify({
      animal_hospital_id: id,
      image_type: values.image_type,
      is_thumbnail: values.is_thumbnail,
    });

    const formData = new FormData();

    formData.append('file', values.file[0].originFileObj as string | Blob);
    formData.append('request', new Blob([json], { type: 'application/json' }));

    //
    mutate(formData);
  };

  return (
    <ListCard title="이미지" show>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          label="이미지"
          name="file"
          rules={[{ required: true, message: '이미지를 등록해주세요.' }]}
        >
          <FileUpload />
        </Form.Item>

        <Form.Item initialValue="MAIN" label="이미지 타입" name="image_type">
          <Radio.Group>
            <Radio value="MAIN">메인</Radio>
            <Radio value="SHEET">검진표</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          initialValue={false}
          label="썸네일사용여부"
          name="is_thumbnail"
        >
          <Switch />
        </Form.Item>

        <SubmitButton isLoading={isPending} />
      </Form>
    </ListCard>
  );
}
