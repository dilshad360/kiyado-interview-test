import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { CartProvider } from './contexts/CardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Header />
      <App />
      <Footer />
    </CartProvider>
  </React.StrictMode>,
)
