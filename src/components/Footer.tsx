import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 800, letterSpacing: '-0.03em' }}>
              <span>🐾</span>
              <span className="gradient-text">PawLife</span>
            </div>
            <p>Your complete pet care companion — premium products, trusted vets, and everything your fur baby needs.</p>
            <div className="footer__social" style={{ marginTop: 20 }}>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">👤</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4>Shop</h4>
            <ul>
              <li><NavLink to="/store">All Products</NavLink></li>
              <li><NavLink to="/store">Dog Food</NavLink></li>
              <li><NavLink to="/store">Cat Food</NavLink></li>
              <li><NavLink to="/store">Toys</NavLink></li>
              <li><NavLink to="/store">Accessories</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Vet Services</h4>
            <ul>
              <li><NavLink to="/vet">Find a Vet</NavLink></li>
              <li><NavLink to="/vet">Book Appointment</NavLink></li>
              <li><NavLink to="/vet">Emergency Care</NavLink></li>
              <li><NavLink to="/vet">Pet Grooming</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2025 PawLife. Made with ❤️ for pet lovers.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
