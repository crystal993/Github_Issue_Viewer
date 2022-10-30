import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
* {
	box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
	background-color: #5e5d5d;
  font-family: 'Nanum Gothic Coding', monospace;
}
body * {
	background-color: transparent;
	letter-spacing: -0.5px;
}
h1, h2, h3, h4, h5 {
  font-family: 'Roboto', sans-serif;
  padding: 1rem 0;
}
h1 {
  font-size: 1.8rem;
}
h2 {
  font-size: 1.4rem;
}
h3 {
  font-size: 1.2rem;
}
h4 {
  font-size: 1rem;
}
h5 {
  font-size: 0.8rem;
}
span {
  font-size: 1rem;
}
p {
  display: block;
  padding: 1rem 0;
  letter-spacing: 0.02rem;
  line-height: 1.3rem;
}
a {
	text-decoration: underline;
  color: blue;
  cursor: pointer;
}
div.highlight{
  padding: 1rem;
  background-color: ${({ theme }) => theme.lightgray};
}
code {
  display: block;
  padding: 1rem;
  background-color: ${({ theme }) => theme.lightgray};
  letter-spacing: 0.02rem;
  line-height: 1.3rem;
  white-space:pre-wrap;
}
`;
export default GlobalStyle;
