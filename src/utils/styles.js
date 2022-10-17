import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Clair',
    colors: {
      main: '#26827C',
      mainLight: '#DFECEB',
      mainDark: '#1D625E',
      second: '#EFF4F9',
      secondDark: '#B1D4F6',
      background: '#ffffff',
      text: '#383838',
      textLight: '#FBFBFC',
      error: '#ce0500',
      errorLight: '#ffdddd',
      warning: '#fc5d00',
    },
    fonts: {
      body: '"Marianne", Arial, sans-serif',
      title: '"Marianne", Arial, sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${36}em)`,
      medium: `@media screen and (max-width: ${73}em)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.4;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  #root {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: bold;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.25rem;

    ${(props) => props.theme.mq.medium} {
      font-size: 2rem;
    }
    ${(props) => props.theme.mq.small} {
      font-size: 1.5rem;
    }
  }
  
  h2 {
    font-size: 2rem;

     ${(props) => props.theme.mq.medium} {
      font-size: 1.75rem;
    }

    ${(props) => props.theme.mq.small} {
      font-size: 1.375rem;
    }
  }

  h3 {
    font-size: 1.375rem;

    ${(props) => props.theme.mq.small} {
      font-size: 1.125rem;
    }
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }

  option {
    color: #383838;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
`
