import { Button, Form, FormInstance, Input, Modal, Space } from 'antd';
import { useEffect, useState } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import rules from '../../../lib/rules';
import { useKakaoAddressQuery } from '../../../models/kakao-address/kakao-address.ts';

interface AddressInputProps {
  form: FormInstance;
}

const AddressInput = (props: AddressInputProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [searchAddress, setSearchAddress] = useState('');

  const { data: geoData } = useKakaoAddressQuery({
    query: searchAddress,
  });

  const onCompletePost = (data: Address) => {
    props.form.setFieldsValue({
      address: data.address,
      zipCode: data.zonecode,
    });
    setSearchAddress(data.address);

    setOpenModal(false);
  };

  useEffect(() => {
    if (geoData?.data) {
      const [address] = geoData.data.documents;

      props.form.setFieldsValue({
        ...props.form.getFieldsValue(),
        latitude: address.y,
        longitude: address.x,
      });
    }
  }, [geoData?.data, props.form]);

  return (
    <>
      <Form.Item label="우편번호" required>
        <Space>
          <Form.Item name="zipCode" noStyle rules={rules().required}>
            <Input disabled />
          </Form.Item>
          <Button onClick={() => setOpenModal(true)}>우편번호 찾기</Button>
        </Space>
      </Form.Item>
      <Form.Item label="주소" name="address" rules={rules().required}>
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="상세주소"
        name="detail_address"
        rules={rules().required}
      >
        <Input placeholder="상세주소를 입력해주세요." maxLength={200} />
      </Form.Item>
      <Modal
        title="주소검색"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        destroyOnClose={true}
      >
        <DaumPostcodeEmbed onComplete={onCompletePost} />
      </Modal>
    </>
  );
};

export default AddressInput;
