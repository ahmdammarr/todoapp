import React from 'react';
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
