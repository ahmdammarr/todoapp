import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';

import {BottomTabNavigator} from '../BottomTabsNavigator';

describe('Testing bottom navigation', () => {
  test('main screen contains todos', async () => {
    const component = (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );

    render(component);

    const todoScreen = await screen.findByText('TodosScreen');

    expect(todoScreen).toBeTruthy();
  });

});