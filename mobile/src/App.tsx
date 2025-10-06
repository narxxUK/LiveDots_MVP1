import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from '@store/index';
import {AppNavigator} from '@/navigation/AppNavigator';
import {theme} from '@/theme';
import {AuthProvider} from '@/providers/AuthProvider';
import {PermissionsProvider} from '@/providers/PermissionsProvider';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <PaperProvider theme={theme}>
            <AuthProvider>
              <PermissionsProvider>
                <NavigationContainer>
                  <AppNavigator />
                </NavigationContainer>
              </PermissionsProvider>
            </AuthProvider>
          </PaperProvider>
        </ReduxProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;