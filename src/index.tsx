import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AppProviders } from './providers/AppProviders'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
)
