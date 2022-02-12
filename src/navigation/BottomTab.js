import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';
import CustomIcon from '../assets/fonts';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <CustomIcon name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <CustomIcon name="search" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <CustomIcon name="notification" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <CustomIcon name="stats" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
