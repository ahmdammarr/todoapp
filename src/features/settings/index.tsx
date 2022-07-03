import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Settings} from './screens';
import {TSettingsRoutes} from './models/types/navigations.types';
import {EsettingsRoutes} from './models/enums/navigation.enums';

export const SettingsStack = createStackNavigator<TSettingsRoutes>();
export const SettingsStackScreens = () => (
  <SettingsStack.Navigator
    
    initialRouteName={EsettingsRoutes.settings}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <SettingsStack.Screen
      name={EsettingsRoutes.settings}
      component={Settings}
    />
  </SettingsStack.Navigator>
);
