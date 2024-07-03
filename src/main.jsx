import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'
import { CartProvider } from './contexts/CardContext.jsx'
import { ProductProvider } from './contexts/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ProductProvider>
    <CartProvider>
      <Header />
      <App />
      <Footer />
    </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
