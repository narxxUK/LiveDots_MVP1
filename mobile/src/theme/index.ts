import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    placeholder: '#8E8E8E',
    disabled: '#444444',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#FF6B6B',
    // Custom colors for LiveDots
    phoneStream: '#FF6B6B',
    aiGlassesStream: '#4ECDC4',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  body1: {
    fontSize: 16,
    fontWeight: 'normal' as const,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    fontWeight: 'normal' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal' as const,
    lineHeight: 16,
  },
};