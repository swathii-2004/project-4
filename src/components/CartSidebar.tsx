import type { CartItem } from '../App'

type CartSidebarProps = {
  items: CartItem[]
  onClose: () => void
  onRemove: (id: number) => void
}

export default function CartSidebar({ items, onClose, onRemove }: CartSidebarProps) {
  const total = items.reduce((sum, i) => sum + i.price, 0)

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <aside className="cart-sidebar">
        <div className="cart-sidebar__header">
          <span className="cart-sidebar__title">🛍️ Your Cart ({items.length})</span>
          <button className="cart-sidebar__close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-sidebar__items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p>Your cart is empty</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Add some goodies for your pet!</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item__img" />
                <div style={{ flex: 1 }}>
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__price">${item.price.toFixed(2)}</p>
                </div>
                <button className="cart-item__remove" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-sidebar__footer">
          {items.length > 0 && (
            <>
              <div className="cart-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Checkout →
              </button>
            </>
          )}
          {items.length === 0 && (
            <button className="btn btn-outline" style={{ width: '100%' }} onClick={onClose}>
              Continue Shopping
            </button>
          )}
        </div>
      </aside>
    </>
  )
}
