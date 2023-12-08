import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { checkDevice } from '../utils/checkDevice';
import {
  currentLocationState,
  locationPermissionState,
  locationState,
} from '../store/location';

const useLocation = () => {
  const [location, setLocation] = useAtom(locationState);
  const [currentLocation, setCurrentLocation] = useAtom(currentLocationState);
  const [permission, setPermission] = useAtom(locationPermissionState);

  const requestLocation = () => {
    window?.ReactNativeWebView?.postMessage('REQUEST_LOCATION');
  };

  const requestCurrentLocation = () => {
    window?.ReactNativeWebView?.postMessage('REQUEST_CURRENT_LOCATION');
  };

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
