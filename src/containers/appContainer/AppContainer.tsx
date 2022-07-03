import {NavigationContainer} from 'containers/navigationContainer';
import {Splash} from 'features/splash/screens/splash';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Loader} from 'shared/components/Loader';
import {useCachedResources} from 'shared/hooks/useCashedResources';

export const AppContainer = () => {
  const {isLoading, IsSplashOn} = useCachedResources();

  if (IsSplashOn) return <Splash />;
  if (isLoading) return <Loader style={style.Loader} />;
  return (
    <SafeAreaProvider>
      <NavigationContainer />
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  Loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
