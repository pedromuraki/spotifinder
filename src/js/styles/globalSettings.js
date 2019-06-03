import fonts from './constants/fonts'

const globalSettings = `
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap');

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    ${fonts.ms}
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${fonts.msBlack}
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: none;
    outline: 0;
    cursor: pointer;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }
`

export default globalSettings
