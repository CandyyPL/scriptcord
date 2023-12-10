import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import GlobalStyle from '@/assets/styles/GlobalStyle.ts'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme.ts'
import AuthProvider from '@/providers/AuthProvider.tsx'
import App from './App.tsx'

WebFont.load({
  google: {
    families: ['Roboto', 'Ubuntu'],
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
