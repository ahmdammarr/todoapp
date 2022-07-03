import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {useThemed} from 'shared/hooks/useThemed';
import {TColors} from 'shared/models/types/theme.types';
import {scaleWidth} from 'utils/scaling';

export const TextInputArea = ({...props}: TextInputProps) => {
  return <TextInput multiline {...props} />;
};
