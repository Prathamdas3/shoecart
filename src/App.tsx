import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Navbar = lazy(() => import('./components/Navbar'))
const HomePage = lazy(() => import('./pages/HomePage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const DetailsPage = lazy(() => import('./pages/DetailsPage'))
const WishListPage = lazy(() => import('./pages/WishListPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/wish" element={<WishListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
