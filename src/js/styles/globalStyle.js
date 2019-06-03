import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import globalSettings from './globalSettings'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${globalSettings}
`

export default GlobalStyle
