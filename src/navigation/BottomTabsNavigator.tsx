import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "Main";
import { ERootNavigationRoutes } from "shared/enums";


const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name={ERootNavigationRoutes.splash}
        component={Main}
      />
    </BottomTab.Navigator>
  );
};
