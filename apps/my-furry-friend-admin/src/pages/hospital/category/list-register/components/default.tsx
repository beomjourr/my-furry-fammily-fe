import { Button, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ListCard from '../../../../../components/common/listcard/ListCard.tsx';
import rules from '../../../../../lib/rules.ts';

const Default = () => {
  return (
    <ListCard show>
      <Form.List name="categories">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  style={{ width: '100%', flex: 1 }}
                  name={[name, 'name']}
                  rules={rules().required}
                >
                  <Input placeholder="카테고리 이름을 입력해주세요." />
                </Form.Item>
                <Form.Item
                  {...restField}
                  style={{ width: '100%', flex: 1 }}
                  name={[name, 'description']}
                  rules={rules().required}
                >
                  <Input placeholder="카테고리 설명을 입력해주세요." />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                필드 추가하기
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </ListCard>
  );
};

export default Default;
