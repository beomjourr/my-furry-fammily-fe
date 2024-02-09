import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-7Y35P8RQMH');
};

export const logEvent = ({ action, params }: any) => {
  ReactGA.event(action, params);
};
