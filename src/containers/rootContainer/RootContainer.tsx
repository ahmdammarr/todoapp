import React from 'react';
import {NavigationContainer} from 'containers/navigationContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ReduxContainer} from 'containers/reduxContainer';

const RootContainer = () => {
  return (
    <ReduxContainer>
      <SafeAreaProvider>
        <NavigationContainer />
      </SafeAreaProvider>
    </ReduxContainer>
  );
};

export {RootContainer};
