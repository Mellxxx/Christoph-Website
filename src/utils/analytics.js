import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize('G-PK6STWY08F');
    // Google Analytics Measurement ID
};

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};
