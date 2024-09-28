import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Meme from './components/Meme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
   <Meme />
  </StrictMode>,
)
