import { NavLink } from 'react-router-dom'

type NavbarProps = {
  cartCount: number
  onCartClick: () => void
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <NavLink to="/" className="navbar__logo">
            <span className="navbar__logo-icon">🐾</span>
            <span className="gradient-text">PawLife</span>
          </NavLink>

          {/* Nav links */}
          <nav>
            <ul className="navbar__nav">
              <li>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                  🏠 Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/store" className={({ isActive }) => isActive ? 'active' : ''}>
                  🛒 Pet Store
                </NavLink>
              </li>
              <li>
                <NavLink to="/vet" className={({ isActive }) => isActive ? 'active' : ''}>
                  💉 Find a Vet
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Cart */}
          <div className="navbar__cta">
            <button className="navbar__cart" onClick={onCartClick} aria-label="Open cart">
              🛍️
              {cartCount > 0 && (
                <span className="navbar__cart-badge">{cartCount}</span>
              )}
            </button>
            <NavLink to="/store" className="btn btn-primary btn-sm">Shop Now</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}