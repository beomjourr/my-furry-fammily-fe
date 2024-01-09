import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const RetryErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const navigate = useNavigate();
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <Result
          status="error"
          title="데이터를 불러오는데 실패하였습니다."
          extra={[
            <Button
              key="retry"
              type="primary"
              onClick={() => resetErrorBoundary()}
            >
              다시 시도
            </Button>,
            <Button key="gohome" onClick={() => navigate('/')}>
              홈으로
            </Button>,
          ]}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
