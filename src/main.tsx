import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider as ContextProviderCart } from './context/CartContext.tsx'
import { ContextProvider as ContextProviderWishList } from './context/WishListContext.tsx'
import { ContextProvider as ContextProviderCategory } from './context/CategoryContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProviderCart>
        <ContextProviderWishList>
          <ContextProviderCategory>
            <App />
          </ContextProviderCategory>
        </ContextProviderWishList>
      </ContextProviderCart>
    </BrowserRouter>
  </React.StrictMode>
)
