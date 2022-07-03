import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, scaleHeight, scaleWidth} from 'utils/scaling';
import {colors, success, danger} from 'assets/colors';
import {TActionButtonProps} from './models/types';
import {Loader} from 'shared/components/Loader';
import {ErrorAnimated} from 'shared/components/ErrorAnimated';
import {EButtonVariants} from './models/enums';

export const ActionButton = ({
  label,
  variant,
  loading,
  error,
  style,
  onPress,
}: TActionButtonProps) => {
  const variantColors = {
    [EButtonVariants.primary]: success,
    [EButtonVariants.danger]: danger,
  };
  const buttonColor = {backgroundColor: variantColors[variant]};
  return (
    <TouchableOpacity
      style={[styles.button, buttonColor, style]}
      onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={styles.label}>{label}</Text>
        {loading && <Loader style={styles.status} />}
        {error && <ErrorAnimated style={styles.status} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: success,
 
  },
  buttonContent: {
    flexDirection: 'row',
  },
  status: {
    width: scaleWidth(20),
    backgroundColor: 'transparent',
  },
  label: {
    color: colors.dark.text,
  },
});
