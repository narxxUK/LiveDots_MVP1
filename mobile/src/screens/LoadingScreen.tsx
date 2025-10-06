import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';

import {theme, spacing} from '@/theme';

export const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        LiveDots
      </Text>
      <ActivityIndicator 
        animating={true} 
        color={theme.colors.primary} 
        size="large" 
        style={styles.loader}
      />
      <Text variant="bodyMedium" style={styles.subtitle}>
        Discovering streams around the world...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: spacing.lg,
  },
  title: {
    color: theme.colors.text,
    marginBottom: spacing.xl,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: spacing.lg,
  },
  subtitle: {
    color: theme.colors.placeholder,
    textAlign: 'center',
    marginTop: spacing.md,
  },
});