# Atlas BFF

Backend For Frontend (BFF) service for WealthAtlas application.

## Tech Stack

- Node.js
- TypeScript
- Express
- Apollo Server (GraphQL)
- Jest (Testing)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript files
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Project Structure

```
src/
├── index.ts          # Application entry point
├── server.ts         # Server configuration
├── schema/          # GraphQL schema definitions
├── resolvers/       # GraphQL resolvers
└── types/          # TypeScript type definitions
```

## Environment Variables

Required environment variables:
- `PORT` - Server port (default: 4000)
- `NODE_ENV` - Environment (development/production)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

ISC 