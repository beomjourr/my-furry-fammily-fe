import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai/index';
import { checkDevice } from '../utils/checkDevice';
import { searchLocationState } from '../store/location';

const useLocation = () => {
  // const [location, setLocation] = useAtom(locationState);
  const [searchLocation, setSearchLocation] = useAtom(searchLocationState);
  // const [permission, setPermission] = useState<Location | undefined>(undefined);

  // const requestLocation = () => {
  //   window?.ReactNativeWebView?.postMessage('REQUEST_LOCATION');
  // };
  //
  // const requestCurrentLocation = () => {
  //   window?.ReactNativeWebView?.postMessage('REQUEST_CURRENT_LOCATION');
  // };

  // useEffect(() => {
  //   requestLocation();
  // }, []);

  const listenMessage = useCallback(
    (e: MessageEvent | (Event & { data?: string })) => {
      const { data, type } = JSON.parse(e.data);

      switch (type) {
        // case 'RESPONSE_LOCATION':
        //   setLocation(data);
        //   break;
        // case 'RESPONSE_CURRENT_LOCATION':
        //   setCurrentLocation(data);
        //   break;
        // case 'RESPONSE_PERMISSION':
        //   setPermission(data);
        //   break;
        default:
          break;
      }
    },
    [],
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
    // permission,
    // location,
    searchLocation,
    setSearchLocation,
    // requestLocation,
    // requestCurrentLocation,
  };
};

export default useLocation;
