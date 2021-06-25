import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {AppProvider} from './context'
ReactDOM.render(
  <React.StrictMode>
    {/* AppProvider로 App전체를 감싸준다 */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
