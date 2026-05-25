# LTP Store

A small Ecommerce. It lists products from a public API, lets you filter, sort and navigate through them. View a product detail page, and add items to a cart.

## Stack

- **React Router v7** (the evolution of Remix)
- **TypeScript**
- **Tailwind CSS v4**
- **DummyJSON** (`https://dummyjson.com`) as the product API

## Running locally

Requirements: Node.js (18+) and npm.

```bash
npm install
npm run dev
```

## Features

- **Product listing** (homepage) with data fetched server-side in the route `loader`.
- **Product detail page** (`/products/:id`) with an *Add to cart* action.
- **Navigation between product pages** (12 products per page).
- **Filter by category**: a dropdown on mobile and a slide-out drawer on desktop.
- **Sorting**: by price (ascending/descending) and by name (A–Z / Z–A).
- **Shopping cart** (`/cart`): add items, increase/decrease quantity and see the running total.
- **Responsive**, mobile-first layout.


## Possible improvements

- Remove items with one button from the cart
- Choose quantity of a product in the Product page
- Change the background of the Product page according to the main color of the product (example: with apples the background would turn to a soft green)
- Animations while navigating through pages
- Persist the cart across refreshes (cookies / `localStorage`).
- And many more