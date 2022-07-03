import React from 'react';
import {render} from '@testing-library/react-native';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import {Settings} from '../screens';

it('renders settings elments', async () => {
  const component = render(
    <Provider store={store}>
      <Settings />
    </Provider>,
  );

  const themeSwitcher = component.queryByTestId('themeSwitcher');
  const LanguageSwitcher = component.queryByTestId('themeSwitcher');
  
  expect(LanguageSwitcher).toBeTruthy();
  expect(themeSwitcher).toBeTruthy();
});
