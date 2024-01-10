import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Wrapper>
      <Spin
        size="large"
        indicator={<LoadingOutlined style={{ fontSize: 70 }} spin />}
      />
    </Wrapper>
  );
};

export default Spinner;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
