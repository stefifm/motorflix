import { createGlobalStyle } from 'styled-components'
import {
  colorBlack,
  colorBlackLight,
  colorRedDark,
  fontWeightLight,
  fontWeightNormal
} from './components/UI/variablesStyle'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(145deg, ${colorRedDark} 0%, ${colorBlackLight} 70%);
  }

  h1 {
    font-size: 3.75rem;
    font-weight: ${fontWeightNormal};
  }

  h2 {
    font-size: 2.5rem;
    font-weight: ${fontWeightNormal};
  }

  h3 {
    font-size: 1.875rem;
    font-weight: ${fontWeightNormal};
  }

  h4 {
    font-size: 1.688rem;
    font-weight: ${fontWeightLight};
  }

  p {
    font-size: 1.125rem;
    font-weight: ${fontWeightLight};
  }

  span {
    font-size: 1rem;
    font-weight: ${fontWeightLight};
  }
`
