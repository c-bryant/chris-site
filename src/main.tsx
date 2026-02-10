import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import Router from './router'

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/chris-site">
      <Router />
    </BrowserRouter>
  </StrictMode>
)
