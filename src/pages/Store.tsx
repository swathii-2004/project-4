import { useState } from 'react'
import type { CartItem } from '../App'

const CATEGORIES = ['All', 'Dog Food', 'Cat Food', 'Toys', 'Accessories', 'Health']

type Product = {
  id: number
  name: string
  category: string
  price: number
  rating: number
  reviews: number
  img: string
  badge?: string
}

const PRODUCTS: Product[] = [
  {
    id: 1, name: 'Royal Canin Maxi Adult', category: 'Dog Food', price: 34.99,
    rating: 5, reviews: 842,
    img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80',
    badge: 'Best Seller',
  },
  {
    id: 2, name: 'Hill\'s Science Diet', category: 'Dog Food', price: 28.49,
    rating: 4, reviews: 531,
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80',
  },
  {
    id: 3, name: 'Purina Pro Plan Cat', category: 'Cat Food', price: 22.99,
    rating: 5, reviews: 1204,
    img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80',
    badge: 'New',
  },
  {
    id: 4, name: 'Fancy Feast Grain Free', category: 'Cat Food', price: 18.75,
    rating: 4, reviews: 678,
    img: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&q=80',
  },
  {
    id: 5, name: 'Kong Classic Chew Toy', category: 'Toys', price: 12.99,
    rating: 5, reviews: 2301,
    img: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&q=80',
    badge: 'Top Rated',
  },
  {
    id: 6, name: 'Feather Teaser Wand', category: 'Toys', price: 8.49,
    rating: 4, reviews: 389,
    img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80',
  },
  {
    id: 7, name: 'Leather Pet Collar', category: 'Accessories', price: 19.99,
    rating: 5, reviews: 714,
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80',
  },
  {
    id: 8, name: 'Orthopedic Dog Bed', category: 'Accessories', price: 54.99,
    rating: 5, reviews: 436,
    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80',
    badge: 'Sale',
  },
  {
    id: 9, name: 'Pet Dental Care Kit', category: 'Health', price: 14.99,
    rating: 4, reviews: 293,
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
  },
  {
    id: 10, name: 'Vitamin & Supplement Pack', category: 'Health', price: 26.99,
    rating: 5, reviews: 852,
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80',
    badge: 'Popular',
  },
  {
    id: 11, name: 'Blue Buffalo Life Prot.', category: 'Dog Food', price: 31.99,
    rating: 4, reviews: 617,
    img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&q=80',
  },
  {
    id: 12, name: 'Cat Scratcher Lounge', category: 'Accessories', price: 37.50,
    rating: 5, reviews: 943,
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="stars">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  )
}

type StoreProps = {
  onAddToCart: (item: CartItem) => void
}

export default function Store({ onAddToCart }: StoreProps) {
  const [active, setActive] = useState('All')
  const [added, setAdded] = useState<number | null>(null)

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  const handleAdd = (p: Product) => {
    onAddToCart({ id: p.id, name: p.name, price: p.price, img: p.img })
    setAdded(p.id)
    setTimeout(() => setAdded(null), 1200)
  }

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="tag animate-fadeUp">🛒 Pet Store</span>
          <h1 className="animate-fadeUp delay-1">
            Premium Products for<br /><span className="gradient-text">Every Pet</span>
          </h1>
          <p className="animate-fadeUp delay-2">
            Hand-picked, vet-approved products to keep your furry family happy and healthy.
          </p>
        </div>
      </div>

      {/* Store Banner Image */}
      <div className="container animate-fadeUp delay-2" style={{ marginBottom: 48 }}>
        <div style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          height: 280,
          position: 'relative',
          border: '1px solid var(--border)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80"
            alt="Pet store"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Limited time offer
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, textAlign: 'center', color: '#fff' }}>
              Free Shipping on Orders Over $50 🚀
            </h2>
            <a href="#products" className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>

      {/* Products section */}
      <section id="products" className="section-sm">
        <div className="container">
          {/* Filters */}
          <div className="store-filters animate-fadeUp">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--text-muted)' }}>
              {filtered.length} products
            </span>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className={`glass-card product-card animate-fadeUp delay-${(i % 5) + 1}`}>
                <div style={{ position: 'relative' }}>
                  <img src={p.img} alt={p.name} className="product-card__img" />
                  {p.badge && (
                    <span className="badge badge-purple" style={{ position: 'absolute', top: 10, left: 10 }}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="product-card__body" style={{ padding: '0 16px 16px' }}>
                  <p className="product-card__cat">{p.category}</p>
                  <p className="product-card__name">{p.name}</p>
                  <div className="product-card__rating">
                    <StarRating rating={p.rating} />
                    <span>({p.reviews.toLocaleString()})</span>
                  </div>
                  <div className="product-card__footer">
                    <span className="product-card__price">${p.price.toFixed(2)}</span>
                    <button
                      className="product-card__add"
                      onClick={() => handleAdd(p)}
                      title="Add to cart"
                    >
                      {added === p.id ? '✓' : '+'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
