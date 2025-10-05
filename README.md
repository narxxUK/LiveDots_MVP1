# LiveDots MVP1

## Project Overview
A cross-platform mobile app for live streaming with discovery through an interactive globe interface.

## Core Features

### 1. Authentication System
- **Multi-provider login**: Google, Apple, Facebook, Email/Password
- **User data storage**: Name, hashed passwords, location, age verification
- **Database**: Cloud-based user account management
- **UI**: Spotify-style login interface

### 2. Interactive Globe Discovery
- **3D Globe Interface**: Interactive world map with streaming locations
- **Stream Indicators**:
  - 🔴 Red dots: Phone streamers
  - 🔵 Blue dots: AI glasses streamers (Meta glasses)
- **Navigation**: Swipe to rotate, pinch to zoom in/out
- **Search & Filter**: By location, category, or steamer name

### 3. Stream Selection & Viewing
- **Single stream**: Direct connection on tap
- **Multiple streams**: List view with streamer names and locations
- **Live video**: Real-time streaming connection
- **Interactive features**:
  - Emoji reactions
  - Live chat
  - Gift sending

### 4. Broadcasting Capabilities
- **Device permissions**: Camera, microphone, location services
- **Error handling**: Permission denied scenarios, failed logins
- **Live streaming**: Real-time broadcast from mobile device
- **Location sharing**: Stream positioning on globe

## Technical Requirements

### Cross-Platform Development
- **Target platforms**: iOS and Android
- **Technology stack**: Cross-platform framework (React Native)
- **Native integrations**: Device permissions and hardware access

### Backend Infrastructure
- **User authentication**: OAuth integration + custom auth
- **Database**: User profiles and session management
- **Streaming service**: Real-time video streaming infrastructure
- **Location services**: GPS coordinate handling
- **Chat system**: Real-time messaging
- **Payment system**: Gift/monetization features

### Key Components
1. **Authentication Module**
2. **3D Globe Renderer**
3. **Video Streaming Engine**
4. **Chat & Interaction System**
5. **Permission Handler**
6. **Location Services**
7. **Search & Discovery**

## Development Phases

### Phase 1: Foundation
- Set up cross-platform development environment
- Implement authentication system
- Create basic UI framework

### Phase 2: Core Features
- Develop interactive globe interface
- Implement stream discovery and selection
- Basic video streaming functionality

### Phase 3: Broadcasting
- Add streaming capabilities
- Implement device permissions
- Location services integration

### Phase 4: Social Features
- Chat system
- Emoji reactions
- Gift system

### Phase 5: Polish & Optimization
- Performance optimization
- UI/UX refinements
- Testing and bug fixes

## Success Metrics
- Seamless cross-platform experience
- Real-time streaming with minimal latency
- Intuitive globe navigation
- Stable authentication across all providers
- Proper permission handling on both platforms

