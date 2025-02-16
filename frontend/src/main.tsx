import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TypoGraphy } from './global/typography.tsx'
import GlobalStyle from './global/global.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TypoGraphy />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
