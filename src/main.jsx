import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { SettingProvider } from './context/SettingContext.jsx'
import { ShortcutsProvider } from './context/ShortItemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SettingProvider>
        <ShortcutsProvider>
          <App />
        </ShortcutsProvider>
      </SettingProvider>
    </ThemeProvider>
  </StrictMode>,
)
