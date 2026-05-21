# 🌿 Paradise Nursery Shopping Application

A React + Redux shopping application for plant lovers. Browse lush categories of houseplants, add them to your cart, and checkout with ease.

## Features

- **Landing Page** with background image and "Get Started" button
- **3+ Plant Categories**: Tropical, Succulents & Cacti, and Air-Purifying Plants
- **6+ Plants per Category** (18 total plants)
- **Add to Cart** functionality with button disable after adding
- **Dynamic Cart Count** in the header navbar
- **Redux-managed Cart State** using `@reduxjs/toolkit`
- **Cart Page** with:
  - Increase / Decrease item quantity
  - Delete item from cart
  - Total cost display
  - Checkout button
  - Continue Shopping button

## Tech Stack

- React 18
- Redux Toolkit (`@reduxjs/toolkit`)
- React-Redux
- Vite

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx          # Root component + routing logic
├── App.css          # Global styles
├── AboutUs.jsx      # Landing page component
├── ProductList.jsx  # Plant catalog with categories
├── CartItem.jsx     # Cart page component
└── CartSlice.jsx    # Redux slice for cart state
```

## Redux Cart Actions

| Action | Description |
|--------|-------------|
| `addItem` | Add a plant to the cart |
| `removeItem` | Remove a plant from the cart |
| `updateQuantity` | Increase or decrease item quantity |

## Screenshots

- Landing page with a lush botanical background
- Product grid organized by plant category
- Cart with quantity controls and total cost

---

Built with 🌱 by Paradise Nursery
