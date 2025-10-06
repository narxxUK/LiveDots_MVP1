This file provides guidance to WARP (warp.dev) when working with code in this repository.

# Project Overview

LiveDots is a cross-platform mobile app for live streaming with discovery through an interactive 3D globe interface.

# Rules

## Core Architecture

- **Frontend**: Next.js 15 with React 19, TypeScript, and Tailwind CSS
- **Backend**: Next.js API routes with OpenAI integration
- **Database**: SQLite with Prisma ORM
- **UI**: Custom dark-themed interface

### Frontend (Mobile App)
Primary Framework: React Native (as mentioned in your requirements)
-  UI Framework: React Native Paper or Dripsy for consistent design
-  Navigation: React Navigation v6 for seamless screen transitions
-  3D Globe: Three.js with react-native-three.js
-  Maps Alternative: React Native Maps with custom overlay for globe-like experience
-  State Management: Redux Toolkit

### Backend Infrastructure
Runtime: Node.js with Express.js
-  Database: PostgreSQL (primary) with PostGIS for geospatial data + Redis (caching/sessions)
-  Authentication: Firebase Auth for OAuth providers (Google, Apple, Facebook) + custom JWT implementation for email/password
-  Real-time Features: Socket.IO for chat and real-time updates

### Video Streaming
Core Service: 
-  Agora.io (recommended) - excellent mobile SDK, low latency, global CDN
-  Recording: AWS S3 + CloudFront for VOD storage

### Cloud Infrastructure
Primary Cloud: AWS
-  Hosting: AWS ECS/Fargate for containerized backend
-  Database: AWS RDS (PostgreSQL) + ElastiCache (Redis)
-  File Storage: AWS S3 for user avatars, recorded streams
-  CDN: CloudFront for global content delivery
-  Real-time: AWS API Gateway WebSocket for scaling Socket.IO

### Additional Services
-  Push Notifications: Firebase Cloud Messaging (FCM)
-  Analytics: Mixpanel or Amplitude
-  Error Tracking: Sentry
-  Payment Processing: Stripe for gift/monetization features
-  Location Services: Google Maps API for geocoding

### Development Tools
-  Version Control: Git with GitHub
-  CI/CD: GitHub Actions
-  Testing: Jest + Detox (E2E testing)
-  Code Quality: ESLint + Prettier
-  App Distribution: App Store Connect + Google Play Console

## Architecture Highlights

### Microservices Approach:
-  Auth Service
-  Streaming Service  
-  Chat Service
-  User Management Service
-  Location Service

### Scalability Considerations:
-  Load balancers for high availability
-  Database read replicas
-  CDN for global reach
-  Horizontal scaling with containers

### Security:
-  JWT tokens with refresh mechanism
-  API rate limiting
-  Input validation and sanitization
-  HTTPS everywhere
