import { animations } from 'assets/animations';
import * as React from 'react';
import {StyleSheet,ViewProps} from 'react-native';
import { AnimatedView } from '../AnimatedView';


export const ErrorAnimated = (style: ViewProps['style']) => {
  return (
    <AnimatedView
    containerStyle={style}
    animation={animations.errorAnimation}
  />
  );
};


const styles = StyleSheet.create({
  container: {}
});
