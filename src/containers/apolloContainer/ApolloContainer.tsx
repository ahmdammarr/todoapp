import * as React from 'react';
import {TContainerWithChild} from 'shared/models/types/general.types';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {API_SERVER} from '@env';

export const ApolloContainer = ({children}: TContainerWithChild) => {
  const client = new ApolloClient({
    uri: API_SERVER,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
