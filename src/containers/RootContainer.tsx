import React from 'react';
import {NavigationContainer} from 'containers';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const RootContainer = () => {
  return (
   <SafeAreaProvider>
      <NavigationContainer />
   </SafeAreaProvider>
  );
};

export {RootContainer};
