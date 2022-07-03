import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Todos} from './screens';
import {TTodosRoutes} from './models/types/navigations.types';
import {ETodosRoutes} from './models/enums/navigation.enums';

export const TodosStack = createStackNavigator<TTodosRoutes>();
export const TodosStackScreens = () => (
  <TodosStack.Navigator
    
    initialRouteName={ETodosRoutes.todos}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <TodosStack.Screen
      name={ETodosRoutes.todos}
      component={Todos}
    />
  </TodosStack.Navigator>
);
