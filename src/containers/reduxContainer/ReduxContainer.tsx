import {ApolloContainer} from 'containers/apolloContainer';
import React from 'react';
import {Provider} from 'react-redux';
import {TContainerWithChild} from 'shared/models/types/general.types';
import {store} from 'store';

export const ReduxContainer = ({children}: TContainerWithChild) => (
  <ApolloContainer>
    <Provider store={store}>{children}</Provider>
  </ApolloContainer>
);
