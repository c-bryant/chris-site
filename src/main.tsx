import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import Router from './router'

const root = document.getElementById('root')!

const rawBase = import.meta.env.BASE_URL || '/'
const basename = rawBase.replace(/\/$/, '')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={basename || undefined}>
      <Router />
    </BrowserRouter>
  </StrictMode>
)
