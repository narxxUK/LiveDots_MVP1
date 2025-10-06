import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {GlobeScreen} from '@screens/main/GlobeScreen';
import {StreamScreen} from '@screens/main/StreamScreen';
import {BroadcastScreen} from '@screens/main/BroadcastScreen';
import {ProfileScreen} from '@screens/main/ProfileScreen';
import {SearchScreen} from '@screens/main/SearchScreen';
import {ChatScreen} from '@screens/main/ChatScreen';

export type MainTabParamList = {
  Globe: undefined;
  Search: undefined;
  Broadcast: undefined;
  Profile: undefined;
};

export type MainStackParamList = {
  MainTabs: undefined;
  Stream: {
    streamId: string;
    streamerId: string;
    title: string;
  };
  Chat: {
    streamId: string;
    streamerId: string;
  };
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<MainStackParamList>();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Globe':
              iconName = 'public';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Broadcast':
              iconName = 'videocam';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'help';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#8E8E8E',
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopColor: '#333',
          borderTopWidth: 1,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Globe" component={GlobeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Broadcast" component={BroadcastScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen 
        name="Stream" 
        component={StreamScreen}
        options={{
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen 
        name="Chat" 
        component={ChatScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};