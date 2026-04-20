import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import Home from './pages/Home'
import Store from './pages/Store'
import Vet from './pages/Vet'
import './App.css'

export type CartItem = {
  id: number
  name: string
  price: number
  img: string
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, { ...item, id: Date.now() + Math.random() }])
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store onAddToCart={addToCart} />} />
          <Route path="/vet" element={<Vet />} />
        </Routes>
        <Footer />
      </div>
      {cartOpen && (
        <CartSidebar
          items={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  )
}

export default App