import {NavigationContainer} from 'containers/navigationContainer';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useCachedResources} from 'shared/hooks/useCashedResources';

export const AppContainer = () => {
  const {isLoading} = useCachedResources();

  if (isLoading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <SafeAreaProvider>
      <NavigationContainer />
    </SafeAreaProvider>
  );
};
