import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, scaleHeight, scaleWidth} from 'utils/scaling';
import {colors, success} from 'assets/colors';
import {TCompleteButtonProps} from './models/types';
import {UseCompleteTodo} from 'features/todos/hooks/useUpdateTodos/UseCompleteTodo';
import {Loader} from 'shared/components/Loader';

export const CompleteButton = ({label, todoId}: TCompleteButtonProps) => {
  const {completeTodo, loading} = UseCompleteTodo();
  const onCompletePressed = () => completeTodo(todoId);
  return (
    <TouchableOpacity style={styles.button} onPress={onCompletePressed}>
      <View style={styles.buttonContent}>
        <Text style={styles.label}>{label}</Text>
        {loading && <Loader style={styles.loader} />}
      </View>
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
  buttonContent: {
    flexDirection: 'row',
  },
  loader: {
    width: scaleWidth(20),
    backgroundColor: 'transparent',
  },
  label: {
    color: colors.dark.text,
  },
});
