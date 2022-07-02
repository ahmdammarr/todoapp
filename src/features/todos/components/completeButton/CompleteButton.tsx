import {StyleSheet, Text, TouchableOpacity, ViewProps} from 'react-native';
import React from 'react';
import {scale, scaleHeight, scaleWidth} from 'utils/scaling';
import {colors, success} from 'assets/colors';
import { TCompleteButtonProps } from './models/types';

export const CompleteButton = ({label}:TCompleteButtonProps) => {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: scale(10),
    width: scaleWidth(300),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: success,
    marginTop: scaleHeight(20),
  },
  label: {
    color: colors.dark.text,
  },
});
