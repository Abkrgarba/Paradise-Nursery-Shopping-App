import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsData = [
  // ── Tropical Plants ──────────────────────────────────────────────
  {
    category: 'Tropical Plants',
    emoji: '🌴',
    plants: [
      {
        name: 'Monstera Deliciosa',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
        description: 'Iconic split-leaf beauty; thrives in bright indirect light.',
        cost: '$24.99',
        price: 24.99,
      },
      {
        name: 'Bird of Paradise',
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&q=80',
        description: 'Dramatic fan-shaped leaves; a statement floor plant.',
        cost: '$39.99',
        price: 39.99,
      },
      {
        name: 'Fiddle Leaf Fig',
        image: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?w=400&q=80',
        description: 'Large violin-shaped leaves for modern interiors.',
        cost: '$34.99',
        price: 34.99,
      },
      {
        name: 'Banana Plant',
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&q=80',
        description: 'Lush, oversized leaves that bring the tropics home.',
        cost: '$29.99',
        price: 29.99,
      },
      {
        name: 'Philodendron Brasil',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
        description: 'Vibrant variegated heart-shaped leaves on trailing vines.',
        cost: '$16.99',
        price: 16.99,
      },
      {
        name: 'Heliconia',
        image: 'https://images.unsplash.com/photo-1566907225472-514215c9e4b2?w=400&q=80',
        description: 'Exotic lobster-claw blooms in fiery red and yellow.',
        cost: '$44.99',
        price: 44.99,
      },
      {
        name: 'Calathea Orbifolia',
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400&q=80',
        description: 'Stunning silver-striped round leaves that move with the light.',
        cost: '$22.99',
        price: 22.99,
      },
    ],
  },

  // ── Succulents & Cacti ────────────────────────────────────────────
  {
    category: 'Succulents & Cacti',
    emoji: '🌵',
    plants: [
      {
        name: 'Echeveria Elegans',
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
        description: 'Powdery blue-green rosette; almost too pretty to be real.',
        cost: '$9.99',
        price: 9.99,
      },
      {
        name: 'Golden Barrel Cactus',
        image: 'https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=400&q=80',
        description: 'Classic spherical cactus with dramatic golden spines.',
        cost: '$14.99',
        price: 14.99,
      },
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=400&q=80',
        description: 'Nature\'s first-aid kit — soothing gel in every leaf.',
        cost: '$11.99',
        price: 11.99,
      },
      {
        name: 'Haworthia Fasciata',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80',
        description: 'Zebra-striped succulent; perfect for small spaces.',
        cost: '$8.99',
        price: 8.99,
      },
      {
        name: 'String of Pearls',
        image: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=400&q=80',
        description: 'Cascading bead-like leaves; stunning in hanging baskets.',
        cost: '$13.99',
        price: 13.99,
      },
      {
        name: 'Saguaro Cactus',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
        description: 'Iconic tall column cactus; low-maintenance and bold.',
        cost: '$19.99',
        price: 19.99,
      },
      {
        name: 'Jade Plant',
        image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&q=80',
        description: 'Fleshy oval leaves on woody stems; a classic good-luck plant.',
        cost: '$12.99',
        price: 12.99,
      },
    ],
  },

  // ── Air-Purifying Plants ──────────────────────────────────────────
  {
    category: 'Air-Purifying Plants',
    emoji: '🍃',
    plants: [
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
        description: 'Elegant white blooms; removes toxins from indoor air.',
        cost: '$18.99',
        price: 18.99,
      },
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
        description: 'Architectural sword leaves; thrives on neglect.',
        cost: '$17.99',
        price: 17.99,
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80',
        description: 'Cheerful arching leaves with tiny "spiderette" offshoots.',
        cost: '$10.99',
        price: 10.99,
      },
      {
        name: 'Boston Fern',
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=80',
        description: 'Lush, feathery fronds that add moisture to dry rooms.',
        cost: '$15.99',
        price: 15.99,
      },
      {
        name: 'Pothos Golden',
        image: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=400&q=80',
        description: 'Near-indestructible trailing vine; purifies continuously.',
        cost: '$9.99',
        price: 9.99,
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?w=400&q=80',
        description: 'Deep burgundy glossy leaves; one of the best air cleaners.',
        cost: '$26.99',
        price: 26.99,
      },
      {
        name: 'Bamboo Palm',
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&q=80',
        description: 'Graceful multi-stem palm; NASA-approved air purifier.',
        cost: '$32.99',
        price: 32.99,
      },
    ],
  },
];

function PlantCard({ plant, onAddToCart, alreadyInCart }) {
  return (
    <div className="plant-card">
      <div className="plant-img-wrap">
        <img src={plant.image} alt={plant.name} className="plant-img" />
        {alreadyInCart && <div className="in-cart-badge">✓ In Cart</div>}
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-desc">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">{plant.cost}</span>
          <button
            className={`add-btn ${alreadyInCart ? 'add-btn--added' : ''}`}
            onClick={() => onAddToCart(plant)}
            disabled={alreadyInCart}
          >
            {alreadyInCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [activeCategory, setActiveCategory] = useState('All');

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isInCart = (plantName) =>
    cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = ['All', ...plantsData.map((c) => c.category)];

  const visibleCategories =
    activeCategory === 'All'
      ? plantsData
      : plantsData.filter((c) => c.category === activeCategory);

  return (
    <div className="product-list-page">
      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">🌿</span>
          <span className="navbar-name">Paradise Nursery</span>
        </div>
        <div className="navbar-right">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-tab ${activeCategory === cat ? 'cat-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="cart-btn" onClick={onCartClick}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </nav>

      {/* ── Hero strip ── */}
      <div className="product-hero">
        <h2 className="product-hero-title">Our Plant Collections</h2>
        <p className="product-hero-sub">
          Thoughtfully sourced, lovingly grown — find your perfect green companion.
        </p>
      </div>

      {/* ── Plant Sections ── */}
      <div className="categories-container">
        {visibleCategories.map((cat) => (
          <section key={cat.category} className="category-section">
            <div className="category-header">
              <span className="category-emoji">{cat.emoji}</span>
              <h2 className="category-title">{cat.category}</h2>
              <span className="category-count">{cat.plants.length} varieties</span>
            </div>
            <div className="plants-grid">
              {cat.plants.map((plant) => (
                <PlantCard
                  key={plant.name}
                  plant={plant}
                  onAddToCart={handleAddToCart}
                  alreadyInCart={isInCart(plant.name)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
