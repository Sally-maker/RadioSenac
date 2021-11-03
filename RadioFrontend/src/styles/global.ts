import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #0E2773;
    --dark-blue:#08113C;
    --radio-dark-hover: #804D2E;
    --radio-light-hover: #FC914B;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button, input {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
  }

  ul, li {
    list-style: none;
  }

  body {
    font-size: 1rem;
  }
`;
