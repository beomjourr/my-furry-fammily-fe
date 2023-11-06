export const checkDevice = () => {
  const device = navigator.userAgent.toLowerCase(); // userAgent 값 얻기

  if (device.indexOf('android') > -1) {
    return 'android';
  }

  if (
    device.indexOf('iphone') > -1 ||
    device.indexOf('ipad') > -1 ||
    device.indexOf('ipod') > -1
  ) {
    return 'ios';
  }

  return 'other';
};
