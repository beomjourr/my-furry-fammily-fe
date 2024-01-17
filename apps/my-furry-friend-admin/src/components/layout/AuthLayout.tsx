import { Layout } from 'antd';
import styled from 'styled-components';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
