import { createGlobalStyle } from 'styled-components';
import { colors, hexToHexWithAlpha } from './colors';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
        
    :root {
        font-family: Inter;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: ${colors.black};
        background-color: ${hexToHexWithAlpha(colors.white, 87)};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
    a:hover {
        color: #535bf2;
    }

    body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
    }
    
    #root {       
        display: flex;
        width: 100%;
    }
    
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border: 0 solid transparent;
        padding: 0;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: transparent;
        cursor: pointer;
        transition: border-color 0.25s;
        line-height: 0;
    }

    @media (prefers-color-scheme: light) {
        a:hover {
            color: #747bff;
        }
    }
    ul {
        padding: 0;
        list-style-type: none;
        margin: 0;
    }
`;

export default GlobalStyle;
