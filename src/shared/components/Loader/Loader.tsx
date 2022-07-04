import {animations} from 'assets/animations';
import * as React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import {AnimatedView} from '../AnimatedView';

export const Loader = ({style, ...props}: ViewProps) => {
  return (
    <AnimatedView
      containerStyle={style}
      animation={animations.loadingAnimation}
      {...props}
    />
  );
};


