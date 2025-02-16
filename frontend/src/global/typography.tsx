import { createGlobalStyle } from 'styled-components';

export const TypoGraphy = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter.ttf') format('truetype'),
        font-weight: normal;
        font-style: normal;
    }
`;

export const fonts = {
    xl: {
        fontSize: '20px',
        lineHeight: '24.2px'
    },
    lg: {
        fontSize: '15px',
        lineHeight: '18.15px'
    },
    md: {
        fontSize: '13px',
        lineHeight: '15.73px'
    },
    sm: {
        fontSize: '12px',
        lineHeight: '14.52px'
    },
}

export const fontWeights = {
    bold: 600,
    normal: 500,
    light: 400
};
