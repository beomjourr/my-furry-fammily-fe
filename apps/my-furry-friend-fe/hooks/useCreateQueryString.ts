import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

const useCreateQueryString = (name: string, value: string) => {
  const searchParams = useSearchParams()!;

  return useMemo(() => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  }, [name, searchParams, value]);
};

export default useCreateQueryString;
