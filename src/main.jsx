import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { HashRouter } from 'react-router-dom' 
import './index.css'
 import { NameProvider } from './contexts/nameContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <NameProvider>
    <HashRouter future={{v7_startTransition:true, v7_relativeSplatPath:true}} > 
      <AppRouter />
    </HashRouter>
   </NameProvider>
    
  // </StrictMode>,
)
