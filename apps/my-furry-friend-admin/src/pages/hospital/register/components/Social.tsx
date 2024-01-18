import { Form, Input } from 'antd';
import ListCard from '../../../../components/common/listcard/ListCard.tsx';

const { TextArea } = Input;

interface SocialProps {
  show?: boolean;
}

export default function Social({ show = true }: SocialProps) {
  return (
    <ListCard title="기타정보" required show={show}>
      <Form.Item label="홈페이지 URL" name="homepage_url">
        <Input />
      </Form.Item>

      <Form.Item label="블로그 URL" name="blog_url">
        <Input />
      </Form.Item>

      <Form.Item label="인스타그램 URL" name="instagram_url">
        <Input />
      </Form.Item>

      <Form.Item label="페이스북 URL" name="facebook_url">
        <Input />
      </Form.Item>

      <Form.Item label="유튜브 URL" name="youtube_url">
        <Input />
      </Form.Item>

      <Form.Item label="설명" name="info_description">
        <TextArea />
      </Form.Item>
    </ListCard>
  );
}
