
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './styles/Global.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
