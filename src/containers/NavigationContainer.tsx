import { RootStackNavigator } from "navigation";
import React from "react";
import { NavigationContainer as RnNavigationContainer } from "@react-navigation/native";

export const NavigationContainer = () => {

  return (
    <RnNavigationContainer>
      <RootStackNavigator />
    </RnNavigationContainer>
  );
};
