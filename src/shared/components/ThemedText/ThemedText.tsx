import {Text} from 'react-native';
import React from 'react';
import {useThemed} from 'shared/hooks/useThemed';
import {TThemedText} from 'shared/models/types/theme.types';

const ThemedText = (props: TThemedText) => {
  const {style, light, dark, ...otherProps} = props;
  const color = useThemed({light, dark}, 'text');

  return <Text style={[{color}, style]} {...otherProps} />;
};

export {ThemedText};
