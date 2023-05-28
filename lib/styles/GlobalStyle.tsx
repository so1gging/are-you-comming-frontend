import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #1A1E27;
    --color-red: #E06469;
    --color-blue: #19A7CE;
    --color-gray01: #B1B8C0;
    --color-bg01: #F6F1F1;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
