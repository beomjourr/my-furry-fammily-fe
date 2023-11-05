import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { checkDevice } from '../utils/checkDevice';
import { currentLocation } from '../store/location';

const useLocation = () => {
  const [isGranted, setIsGranted] = useState<boolean>(false);
  const [location, setLocation] = useAtom(currentLocation);

  const requestLocation = () => {
    window?.ReactNativeWebView?.postMessage('REQUEST_LOCATION');
  };

  const listenMessage = useCallback(
    (e: MessageEvent | (Event & { data?: string })) => {
      const { data, type } = JSON.parse(e.data);
      if (type === 'RESPONSE_LOCATION') {
        setLocation(data);
      }
      if (type === 'GRANTED_LOCATION') {
        setIsGranted(true);
      }
    },
    [setIsGranted, setLocation],
  );

  useEffect(() => {
    if (checkDevice() === 'ios') {
      window.addEventListener('message', listenMessage);
    }

    if (checkDevice() === 'android') {
      document.addEventListener('message', listenMessage);
    }
  }, [listenMessage]);

  return { location, isGranted, setIsGranted, requestLocation };
};

export default useLocation;
