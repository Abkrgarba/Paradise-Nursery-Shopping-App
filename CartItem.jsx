import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase! 🌿\nYour plants are on their way!');
  };

  return (
    <div className="cart-page">
      {/* ── Navbar ── */}
      <nav className="cart-navbar">
        <button className="back-btn" onClick={onContinueShopping}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back
        </button>
        <div className="cart-navbar-brand">
          <span>🌿</span>
          <span>Paradise Nursery</span>
        </div>
        <div className="cart-navbar-title">Your Cart</div>
      </nav>

      <div className="cart-layout">
        {/* ── Left: Items ── */}
        <div className="cart-items-col">
          <div className="cart-items-header">
            <h2>Shopping Cart</h2>
            <span className="items-count">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>Your cart is empty</p>
              <button className="continue-btn" onClick={onContinueShopping}>
                Browse Plants
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.name} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">{item.cost} each</p>
                    <div className="cart-item-controls">
                      <div className="qty-control">
                        <button
                          className="qty-btn"
                          onClick={() => handleDecrease(item)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleIncrease(item)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.name)}
                        aria-label="Remove item"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3,6 5,6 21,6"/>
                          <path d="M19 6l-1 14H6L5 6"/>
                          <path d="M10 11v6M14 11v6"/>
                          <path d="M9 6V4h6v2"/>
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <button
              className="continue-shopping-btn"
              onClick={onContinueShopping}
            >
              ← Continue Shopping
            </button>
          )}
        </div>

        {/* ── Right: Order Summary ── */}
        {cartItems.length > 0 && (
          <div className="order-summary">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-lines">
              {cartItems.map((item) => (
                <div key={item.name} className="summary-line">
                  <span className="summary-line-name">
                    {item.name}
                    <span className="summary-line-qty"> × {item.quantity}</span>
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider" />

            <div className="summary-subtotal">
              <span>Subtotal</span>
              <span>${totalCost}</span>
            </div>
            <div className="summary-shipping">
              <span>Shipping</span>
              <span className="free-shipping">FREE 🌿</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <span>${totalCost}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout — ${totalCost}
            </button>

            <p className="summary-note">
              🔒 Secure checkout · Free returns within 30 days
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
