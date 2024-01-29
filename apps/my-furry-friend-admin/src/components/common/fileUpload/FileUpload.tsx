import { UploadOutlined } from '@ant-design/icons';
import { Button, Image as AntdImage, Modal, Upload, UploadFile } from 'antd';
import { useState } from 'react';
import { UploadChangeParam } from 'antd/es/upload';

interface FileUploadProps {
  maxCount?: number;
  onChange?: (fileList: UploadFile[]) => void;
  accept?: string;
}

export function getBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export default function FileUpload({
  maxCount = 1,
  onChange,
  accept = 'image/*',
}: FileUploadProps) {
  const [previewImage, setPreviewImage] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleChange = (file: UploadChangeParam) => {
    onChange?.(file.fileList);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as Blob);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const customRequest = (options: any) => {
    const { onError, onSuccess } = options;
    try {
      onSuccess();
    } catch (e) {
      onError();
    }
  };

  return (
    <>
      <Upload
        listType="picture"
        accept={accept}
        customRequest={customRequest}
        onChange={handleChange}
        onPreview={handlePreview}
        maxCount={maxCount}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>

      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <AntdImage
          style={{ width: '100%' }}
          preview={false}
          src={previewImage}
        />
      </Modal>
    </>
  );
}
