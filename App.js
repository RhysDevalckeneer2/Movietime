import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './src/styles/Navigation/TabBarStyle';

// Import Screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ListScreen from './src/screens/ListScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {  
  return (
    <NavigationContainer >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch(route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Search':
                    iconName = focused ? 'search' : 'search-outline';
                    break; 
                case 'Favorites':
                  iconName = focused ? 'list' : 'list-outline';
                  break
                case 'Settings':
                  iconName = focused ? 'settings' : 'settings-outline';
                  break;
              } 
              return <Ionicons name={ iconName } size={ size } color={ color } />;
            },
            // tabBarActiveTintColor: '#543FEC',
            tabBarActiveTintColor: '#3E424A',
            tabBarInactiveTintColor: '#9CA3AF',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
          <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}  />
          <Tab.Screen name="Favorites" component={ListScreen} options={{ headerShown: false }}  />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}  />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

