export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  avatar?: string;
  location?: {
    latitude: number;
    longitude: number;
    city?: string;
    country?: string;
  };
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Stream {
  id: string;
  userId: string;
  title: string;
  description?: string;
  category: StreamCategory;
  isLive: boolean;
  viewerCount: number;
  location: {
    latitude: number;
    longitude: number;
  };
  deviceType: 'phone' | 'ai_glasses';
  thumbnailUrl?: string;
  rtcToken?: string;
  startedAt?: Date;
  endedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  streamId: string;
  userId: string;
  username: string;
  message: string;
  type: 'text' | 'emoji' | 'gift';
  timestamp: Date;
}

export interface Gift {
  id: string;
  name: string;
  icon: string;
  value: number;
  animation?: string;
}

export interface StreamReaction {
  id: string;
  streamId: string;
  userId: string;
  emoji: string;
  timestamp: Date;
}

export enum StreamCategory {
  TRAVEL = 'travel',
  MUSIC = 'music',
  FOOD = 'food',
  SPORTS = 'sports',
  EDUCATION = 'education',
  ENTERTAINMENT = 'entertainment',
  LIFESTYLE = 'lifestyle',
  TECHNOLOGY = 'technology',
  OTHER = 'other'
}

export enum UserRole {
  USER = 'user',
  STREAMER = 'streamer',
  MODERATOR = 'moderator',
  ADMIN = 'admin'
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}