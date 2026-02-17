import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from '@/app/AppProvider'
import AppRouter from '@/app/AppRouter'
import '@/styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </StrictMode>,
)
