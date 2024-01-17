import { Skeleton } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import ErrorLayout from '../layout/ErrorLayout';
import { userState } from '../../store/userState.ts';

export default function withInitialize(
  WrappedComponent: React.ComponentType,
): React.ComponentType {
  return function () {
    const [, setUser] = useAtom(userState);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState<
      ResultStatusType | undefined
    >(undefined);

    useEffect(() => {
      (async function () {
        try {
          const res = await getAuth();
          setUser(res);
        } catch (e: any) {
          if (e.response && e.response.status === 404) {
            setUser(null);
          } else {
            setErrorStatus('500');
          }
        } finally {
          setLoading(false);
        }
      })();
    }, [setUser]);

    if (errorStatus) {
      return <ErrorLayout />;
    }
    if (loading) {
      return <Skeleton active />;
    }
    return <WrappedComponent />;
  };
}
