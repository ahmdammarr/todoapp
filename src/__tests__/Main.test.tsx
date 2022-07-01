
import 'react-native';
import React from 'react';
import {Main} from '../Main';

import {render} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { getKey, testKey } from 'utils/localStorage/localStorage';

it('checks if Async Storage is used', async () => {
  // await testKey();
  // await getKey()
  expect(AsyncStorage.getItem).toBeCalledWith('test');
})
it('renders correctly', () => {
  render(<Main />);
});
