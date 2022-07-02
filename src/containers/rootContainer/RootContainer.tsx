import React from 'react';
import {NavigationContainer} from 'containers/navigationContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ReduxContainer} from 'containers/reduxContainer';
import {AppContainer} from 'containers/appContainer';

const RootContainer = () => {
  return (
    <ReduxContainer>
      <AppContainer />
    </ReduxContainer>
  );
};

export {RootContainer};
