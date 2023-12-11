import { useCallback, useEffect, useState } from 'react';
import { checkDevice } from '../utils/checkDevice';

interface Location {
  latitude: number;
  longitude: number;
}

const useLocation = () => {
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const [currentLocation, setCurrentLocation] = useState<Location | undefined>(
    undefined,
  );
  const [permission, setPermission] = useState<Location | undefined>(undefined);

  const requestLocation = () => {
    window?.ReactNativeWebView?.postMessage('REQUEST_LOCATION');
  };

  const requestCurrentLocation = () => {
    window?.ReactNativeWebView?.postMessage('REQUEST_CURRENT_LOCATION');
  };

  useEffect(() => {
    requestCurrentLocation();
  }, []);

  const listenMessage = useCallback(
    (e: MessageEvent | (Event & { data?: string })) => {
      const { data, type } = JSON.parse(e.data);
      switch (type) {
        case 'RESPONSE_LOCATION':
          setLocation(data);
          break;
        case 'RESPONSE_CURRENT_LOCATION':
          setCurrentLocation(data);
          break;
        case 'RESPONSE_PERMISSION':
          setPermission(data);
          break;
        default:
          break;
      }
    },
    [setCurrentLocation, setLocation, setPermission],
  );

  useEffect(() => {
    if (checkDevice() === 'ios') {
      window.addEventListener('message', listenMessage);
    }

    if (checkDevice() === 'android') {
      document.addEventListener('message', listenMessage);
    }
  }, [listenMessage]);

  return {
    permission,
    location,
    currentLocation,
    requestLocation,
    requestCurrentLocation,
  };
};

export default useLocation;
