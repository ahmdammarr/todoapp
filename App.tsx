import React from 'react';
import {Main} from 'Main';
import { useCachedResources } from 'shared/hooks/useCashedResources';
import { ActivityIndicator } from 'react-native';
import 'i18n'
const App = () => {
  const {isLoading} = useCachedResources()
  if(isLoading) return <ActivityIndicator/>
  return <Main />;
};

export default App;
