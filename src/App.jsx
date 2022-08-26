import { BrowserRouter } from "react-router-dom"
import Routes from './Routes'
import './global.css'

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

