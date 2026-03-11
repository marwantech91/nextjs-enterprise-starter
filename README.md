# Next.js Enterprise Starter

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Production-ready Next.js 14 starter template with TypeScript, Tailwind CSS, authentication, testing, and CI/CD pipeline.

## Features

- **Next.js 14** - App Router, Server Components, Server Actions
- **TypeScript** - Strict mode enabled
- **Tailwind CSS** - Utility-first styling
- **Authentication** - NextAuth.js ready
- **Testing** - Jest + React Testing Library + Cypress
- **CI/CD** - GitHub Actions workflow
- **Docker** - Production-ready containerization
- **Code Quality** - ESLint, Prettier, Husky pre-commit hooks
- **SEO** - Metadata API, sitemap, robots.txt
- **Performance** - Optimized images, fonts, and Core Web Vitals

## Quick Start

```bash
# Clone the repository
git clone https://github.com/marwantech91/nextjs-enterprise-starter.git
cd nextjs-enterprise-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/          # Auth route group
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/              # UI primitives
│   │   └── shared/          # Shared components
│   ├── lib/                 # Utilities and helpers
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript types
│   └── styles/              # Global styles
├── public/                  # Static assets
├── tests/                   # Test files
│   ├── unit/                # Unit tests
│   └── e2e/                 # Cypress E2E tests
├── .github/workflows/       # CI/CD pipelines
├── docker/                  # Docker configuration
└── docs/                    # Documentation
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run type-check` | TypeScript type checking |

## Environment Variables

```env
# .env.local
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
```

## Docker

```bash
# Build image
docker build -t nextjs-app .

# Run container
docker run -p 3000:3000 nextjs-app
```

Or use Docker Compose:

```bash
docker-compose up
```

## CI/CD

This project includes GitHub Actions workflows for:

- **CI** - Lint, type-check, and test on every PR
- **Deploy** - Automatic deployment on merge to main

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with [Next.js](https://nextjs.org) by [Marwan Saleh](https://github.com/marwantech91)
