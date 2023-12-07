import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

export function useDebounce<F extends (...args: any[]) => any>(
  callback: F,
  wait: number,
  options: Parameters<typeof debounce>[2] = {},
) {
  const debounced = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, options, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
