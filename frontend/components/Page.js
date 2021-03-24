import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Radnika Next';
    src: url('./static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
  --red: #ff0000;
  --black: #393939;
  --grey: #3a3a3a;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.9);
  box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Radnika Next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Radnika Next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <h1>I'm the page component</h1>
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
