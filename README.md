# The 4 Blocks - React Application

A modern React application for Dr. Vincent E. Parr's book "The 4 Blocks" - a system blending REBT psychology and Zen mindfulness.

## Pages

- **Landing Page** (`/`) - Full book showcase with hero, blocks description, and CTAs
- **Product Page** (`/products`) - Three product options with checkout links:
  - Veterans Edition → https://the4blockstojoy.samcart.com/products/veterans
  - Individual → https://the4blockstojoy.samcart.com/products/individual
  - Family Package → https://the4blockstojoy.samcart.com/products/family

## Features

- Modern dark theme design with gradient accents
- Smooth scroll animations
- Responsive layout for all devices
- React Router navigation
- Direct checkout links to SamCart

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server will start at `http://localhost:5173`

## Project Structure

```
SamCart/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx    # Main landing page
│   │   └── ProductPage.jsx    # Product selection page
│   ├── App.jsx                # Router configuration
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

## Technologies

- React 18
- React Router 6
- Vite
- Tailwind CSS
- Lucide React (icons)
