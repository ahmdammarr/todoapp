import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'store';
import {TReduxContainer} from './models/types';

export const ReduxContainer = ({children}: TReduxContainer) => (
  <Provider store={store}>{children}</Provider>
);
