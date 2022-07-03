import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {TTodoListProps} from './models/types';
import {ThemedText} from 'shared/components/ThemedText';
import {TodoItem} from '../todoItem/TodoItem';
import {EStatus} from 'features/todos/models/enums/ETodo.enums/EStatus.enum';
import { SCREEN_WIDTH } from 'utils/scaling';

export const TodoList = ({todos}: TTodoListProps) => {
  return (
    <FlatList
      data={todos}
      contentContainerStyle={styles.container}
      renderItem={({item}) => {
        return (
          <TodoItem
            status={EStatus.pending}
            id={item?.id}
            time="1234"
            todo={item?.todo}
          />
        );
      }}
      keyExtractor={({id}) => id}
    />
  );
};
const styles = StyleSheet.create({
  container:{
    //width:SCREEN_WIDTH,
    justifyContent:"center",
  }
});
