# Mini-Store

A modern, full-featured e-commerce application built with Next.js 14, showcasing best practices in React development, state management, and user experience design.

## 🚀 Features

### Core Functionality

- **Product Catalog**: Browse products with advanced filtering, search, and sorting capabilities
- **Product Details**: Detailed product pages with image galleries, stock status, and quantity selection
- **Shopping Cart**: Persistent cart with quantity management and real-time updates
- **Checkout Flow**: Multi-step checkout process with form validation and order confirmation
- **Responsive Design**: Mobile-first approach with seamless desktop experience

### Technical Highlights

- **Server-Side Rendering**: SEO-optimized pages with dynamic metadata generation
- **State Management**: Zustand for cart state with localStorage persistence
- **Data Fetching**: TanStack Query (React Query) for efficient API state management
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Modern UI**: Tailwind CSS with custom components and animations
- **Error Handling**: Comprehensive error boundaries and loading states

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Next.js 14 | React framework with App Router |
| **Language** | TypeScript | Type safety and developer experience |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **State Management** | Zustand | Lightweight state management |
| **Data Fetching** | TanStack Query | Server state management |
| **Icons** | Lucide React | Modern icon library |
| **Linting** | ESLint + Prettier | Code quality and formatting |

## 🏗️ Architecture

### Directory Structure

```
mini-store/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (routes)/          # Route groups
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components
│   │   └── features/         # Feature-specific components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and configs
│   ├── services/             # API services and data fetching
│   ├── store/                # Zustand stores
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Helper functions
├── public/                   # Static assets
└── docs/                    # Documentation
```

### State Management Strategy

- **Cart State**: Zustand store with localStorage persistence
- **Search/Filter State**: Dedicated search store for product filtering
- **Server State**: TanStack Query for API data caching and synchronization
- **Form State**: React Hook Form for complex form handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/MikeAdelek/Mini-Store.git
   cd mini-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript compiler |

## 🎯 Key Features Deep Dive

### Product Management

- **Dynamic Routing**: SEO-friendly URLs with slug-based routing
- **Image Optimization**: Next.js Image component with lazy loading
- **Search & Filter**: Real-time search with category and price filtering
- **Sorting Options**: Multiple sorting criteria (price, name, newest)

### Shopping Cart

- **Persistent State**: Cart survives page refreshes and browser sessions
- **Quantity Management**: Increment/decrement with stock validation
- **Real-time Updates**: Instant UI updates with optimistic updates
- **Cart Summary**: Dynamic pricing calculations with tax and shipping

### Checkout Process

- **Multi-step Flow**: Shipping → Payment → Confirmation
- **Form Validation**: Real-time validation with error messaging
- **Payment Simulation**: Mock payment processing with loading states
- **Order Confirmation**: Generated order IDs with success animations

## 🔧 Development Experience (DX)

### Code Quality

- **TypeScript**: Strict mode enabled for maximum type safety
- **ESLint**: Custom rules for React and Next.js best practices
- **Prettier**: Consistent code formatting across the project
- **Husky**: Pre-commit hooks for code quality enforcement

### Developer Tools

- **React Query Devtools**: Debug server state and cache
- **Next.js DevTools**: Performance and bundle analysis
- **TypeScript IntelliSense**: Full IDE support with auto-completion
- **Hot Reload**: Instant feedback during development

### Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: WebP conversion and responsive images
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching Strategy**: Aggressive caching for static assets

### Testing Strategy

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Tailwind's responsive breakpoint system
- **Touch-Friendly**: Large tap targets and gesture support
- **Performance**: Optimized for slower mobile connections

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel --prod
```

### Docker

```bash
# Build Docker image
docker build -t mini-commerce .

# Run container
docker run -p 3000:3000 mini-commerce
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment platform
- Tailwind CSS for the utility-first approach
- Open source community for the excellent libraries

---

**Built with ❤️ by [MikeAdelek](https://github.com/MikeAdelek)**

For questions or support, please open an issue or contact the maintainer.
