import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Applies the Google Fonts stylesheet that index.html preloads, so the fonts never block first paint.
document
  .querySelector('link[rel="preload"][as="style"]')
  ?.setAttribute('rel', 'stylesheet')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
