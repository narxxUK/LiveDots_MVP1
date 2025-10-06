# LiveDots Development Guide

## Project Overview

LiveDots is a cross-platform mobile app for live streaming with an interactive 3D globe discovery interface. This guide will help you set up the development environment and understand the project structure.

## Architecture

This project follows a microservices architecture:

- **Mobile App**: React Native cross-platform application
- **Backend Services**: 
  - Auth Service (Port 3001)
  - Streaming Service (Port 3002)  
  - Chat Service (Port 3003)
  - User Management Service (Port 3004)
  - Location Service (Port 3005)
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis
- **File Storage**: AWS S3
- **Real-time**: Socket.IO
- **Video Streaming**: Agora.io

## Prerequisites

- **Node.js**: Version 18+ ([Download](https://nodejs.org/))
- **Docker**: For containerized development ([Download](https://docs.docker.com/get-docker/))
- **React Native CLI**: `npm install -g @react-native-community/cli`
- **Android Studio**: For Android development ([Download](https://developer.android.com/studio))
- **Xcode**: For iOS development (Mac only)
- **PostgreSQL**: Version 15+ (or use Docker)
- **Redis**: Version 7+ (or use Docker)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd LiveDots_MVP1
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configuration
# At minimum, set these for local development:
# - DATABASE_URL
# - REDIS_URL  
# - JWT_SECRET
# - AGORA_APP_ID and AGORA_APP_CERTIFICATE
```

### 3. Database Setup

#### Option A: Using Docker (Recommended)

```bash
# Start PostgreSQL and Redis
docker-compose up postgres redis -d

# Run database migrations
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

#### Option B: Local Installation

```bash
# Install PostgreSQL and Redis locally
# Create database: livedots
# Update DATABASE_URL and REDIS_URL in .env

cd backend
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Start Development Servers

#### Backend Services

```bash
# Start all backend services
npm run dev:backend

# Or start individual services
npm run dev:auth      # Port 3001
npm run dev:streaming # Port 3002  
npm run dev:chat      # Port 3003
npm run dev:user      # Port 3004
npm run dev:location  # Port 3005
```

#### Mobile App

```bash
# Start Metro bundler
npm run dev:mobile

# In separate terminals:
npm run build:mobile:ios     # iOS Simulator
npm run build:mobile:android # Android Emulator
```

## Development Workflow

### Code Style

- **ESLint**: Automatically enforces code quality rules
- **Prettier**: Handles code formatting
- **TypeScript**: Strict typing throughout the project

```bash
# Lint code
npm run lint

# Format code  
npm run format

# Type checking
cd mobile && npm run typecheck
```

### Testing

```bash
# Run all tests
npm test

# Run mobile tests
cd mobile && npm test

# Run backend tests
cd backend && npm test
```

### Git Workflow

1. Create feature branches: `git checkout -b feature/your-feature`
2. Make commits with clear messages
3. Run tests and linting before pushing
4. Create pull request to `develop` branch
5. Merge to `main` for releases

## Project Structure

```
LiveDots_MVP1/
├── mobile/                 # React Native mobile app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── screens/        # Screen components
│   │   ├── navigation/     # Navigation setup
│   │   ├── services/       # API clients & business logic
│   │   ├── store/          # Redux store & slices
│   │   ├── utils/          # Helper functions
│   │   └── types/          # TypeScript definitions
│   ├── android/            # Android-specific code
│   ├── ios/                # iOS-specific code
│   └── assets/             # Images, fonts, etc.
│
├── backend/                # Backend services
│   ├── services/
│   │   ├── auth/           # Authentication service
│   │   ├── streaming/      # Video streaming service
│   │   ├── chat/           # Real-time chat service
│   │   ├── user/           # User management service
│   │   └── location/       # Location & discovery service
│   ├── prisma/             # Database schema & migrations
│   └── shared/             # Shared utilities
│
├── shared/                 # Shared types & utilities
├── docs/                   # Documentation
├── .github/                # GitHub Actions CI/CD
└── docker-compose.yml      # Development containers
```

## Key Development Areas

### Mobile App Features

1. **Authentication Flow**: OAuth providers + email/password
2. **3D Globe Interface**: Interactive world map with stream dots  
3. **Stream Discovery**: Search, filter, and browse streams
4. **Video Streaming**: Real-time streaming with Agora.io
5. **Chat System**: Live chat with emoji reactions
6. **Broadcasting**: Stream from mobile camera with location

### Backend Services

1. **Auth Service**: JWT tokens, OAuth integration, session management
2. **Streaming Service**: Agora token generation, stream management
3. **Chat Service**: Socket.IO real-time messaging
4. **User Service**: Profile management, avatar upload
5. **Location Service**: GPS handling, geospatial queries

### Database Schema

Key entities:
- **Users**: Authentication, profile data, location
- **Streams**: Live streams with location, category, device type
- **Chat Messages**: Real-time messages with moderation
- **Gifts & Reactions**: Monetization and engagement features

## API Documentation

### Authentication Endpoints

```
POST /api/auth/login          # Email/password login
POST /api/auth/register       # User registration  
POST /api/auth/oauth/google   # Google OAuth
POST /api/auth/oauth/facebook # Facebook OAuth
POST /api/auth/oauth/apple    # Apple OAuth
POST /api/auth/refresh        # Refresh JWT token
POST /api/auth/logout         # Logout & invalidate tokens
```

### Streaming Endpoints

```
GET  /api/streams             # List live streams
POST /api/streams             # Start new stream
GET  /api/streams/:id         # Get stream details
PUT  /api/streams/:id         # Update stream
DELETE /api/streams/:id       # End stream
POST /api/streams/:id/token   # Get Agora RTC token
```

## Common Issues & Solutions

### Mobile Development

**Metro bundler issues:**
```bash
cd mobile
npx react-native start --reset-cache
```

**Android build issues:**
```bash
cd mobile/android
./gradlew clean
cd ..
npx react-native run-android
```

**iOS build issues:**
```bash
cd mobile/ios
pod install
cd ..
npx react-native run-ios
```

### Backend Development

**Prisma schema changes:**
```bash
cd backend
npx prisma db push    # Push schema changes
npx prisma generate   # Regenerate client
```

**Database reset:**
```bash
cd backend
npx prisma migrate reset
npx prisma db seed    # If seed file exists
```

## Production Deployment

### Mobile App

- **iOS**: Build via Xcode, deploy to App Store Connect
- **Android**: Build APK/AAB, deploy to Google Play Console

### Backend Services

- **AWS ECS/Fargate**: Containerized deployment
- **RDS PostgreSQL**: Managed database
- **ElastiCache Redis**: Managed Redis
- **CloudFront CDN**: Global content delivery
- **S3**: File storage for avatars and recordings

## Contributing

1. Follow the established code style and architecture patterns
2. Write tests for new features
3. Update documentation for significant changes
4. Ensure CI/CD pipeline passes
5. Get code review approval before merging

## Support

- Check existing GitHub issues
- Review API documentation
- Consult architecture decisions in WARP.md
- Reach out to the development team

---

For more detailed information, see the individual service README files in their respective directories.