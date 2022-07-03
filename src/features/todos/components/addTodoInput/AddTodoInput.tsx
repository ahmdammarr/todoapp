import {StyleSheet, View} from 'react-native';
import React, { useState } from 'react';
import {TextInputArea} from 'shared/components/TextInputArea';
import {scale, scaleHeight, scaleWidth, SCREEN_WIDTH} from 'utils/scaling';
import {TColors} from 'shared/models/types/theme.types';
import {useThemed} from 'shared/hooks/useThemed';
import {ActionButton} from '../completeButton';
import {EButtonVariants} from '../completeButton/models/enums';
import { UseCreateTodo } from 'features/todos/hooks/useCreateTodos/useCreateTodo';

export const AddTodoInput = ({dark, light}: TColors) => {
  const themedColor = useThemed({dark, light}, 'secondaryBackground');
  const color = useThemed({dark, light}, 'text');
  const themed = {
    borderColor: themedColor,
    color,
  };
  const {createTodo,loading,error } = UseCreateTodo()
   const[todoText, setTodoText] = useState('') 

   const onAddPressed = ()=>{
    if (!todoText) return
     createTodo(todoText)
    }
  return (
    <View style={styles.container}>
      <TextInputArea
      onChangeText={setTodoText}
        placeholderTextColor={themedColor}
        style={[styles.input, themed]}
      />
      <ActionButton
        style={styles.add}
        label="add"
        variant={EButtonVariants.primary}
        loading={loading}
        error={error}
        onPress={onAddPressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: SCREEN_WIDTH,
  },
  input: {
    height: scaleHeight(90),
    borderWidth: scaleWidth(1),
    borderRadius: scale(8),
    marginBottom: scaleHeight(20),
    width: '70%',
  },
  add: {
    height: scaleHeight(90),
    width: '20%',
    borderRadius: scale(8),
    justifyContent: 'center',
    marginLeft: scaleWidth(4),
  },
});
