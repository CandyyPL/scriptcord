import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import GlobalStyle from '@/assets/styles/GlobalStyle.ts'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme.ts'
import App from './App.tsx'

WebFont.load({
  google: {
    families: ['Roboto'],
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
