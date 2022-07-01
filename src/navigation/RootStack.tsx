import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabsNavigator';
import { TRootStackRoutes } from 'shared/models/types';

export const RootStack = createStackNavigator<TRootStackRoutes>();


export const RootStackNavigator = () => {
  return <BottomTabNavigator />
};





