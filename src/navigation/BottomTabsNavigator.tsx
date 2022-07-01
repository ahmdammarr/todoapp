import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EBottomTabRoutes} from 'shared/models/enums/navigation.enums';
import {TBottomTabNavigator} from 'shared/models/types/navigation.types/TBottomTabNavigator.type';
import { Todos } from 'features/todos/screens';
import { Settings } from 'features/settings/screens';

const BottomTab = createBottomTabNavigator<TBottomTabNavigator>();

export const BottomTabNavigator = () => {
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen name={EBottomTabRoutes.todos} component={Todos} />
      <BottomTab.Screen name={EBottomTabRoutes.settings} component={Settings} />
    </BottomTab.Navigator>
  );
};
