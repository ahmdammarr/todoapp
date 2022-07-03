import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {useThemed} from 'shared/hooks/useThemed';
import {TColors} from 'shared/models/types/theme.types';
import {scaleWidth} from 'utils/scaling';

export const TextInputArea = ({
  light,
  dark,
  ...props
}: TextInputProps & TColors) => {
  const backgroundColor = useThemed({light, dark}, 'background');
  const borderColor = useThemed({light, dark}, 'secondaryBackground');
  const style = {
    backgroundColor,
    borderColor,
    borderWidth: scaleWidth(1),
  };
  return <TextInput style={[style, props.style]} {...props} />;
};
