import { createGlobalStyle } from 'styled-components';
import { reset } from './css';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  }
  :root{
    --color-blue :#0050FF;
    --color-vaseline:#ebe7bf;
    --color-mauve: #dee3f9;
    --color-orange: #FF6C02;
    --color-black : #000000;
    --color-white :#ffffff;
    
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    color: var(--color-white);
    background-color:var(--color-vaseline);
  }
  body {
    font-size: 1.5rem;
    font-family: 'Oswald', sans-serif;
  }
`;
