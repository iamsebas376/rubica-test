import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-PWFNCC42SX');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
