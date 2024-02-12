import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-7Y35P8RQMH');
};

export const sendGAEvent = (action: string, params: any) => {
  try {
    ReactGA.event(action, params);
  } catch (e) {
    console.error(e);
  }
  
};
