import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {TTodoListProps} from './models/types';
import {ThemedText} from 'shared/components/ThemedText';
import {TodoItem} from '../todoItem/TodoItem';
import {EStatus} from 'features/todos/models/enums/ETodo.enums/EStatus.enum';

export const TodoList = ({todos}: TTodoListProps) => {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => {
        return (
          <TodoItem
            status={EStatus.pending}
            time="1234"
            todo={item?.attributes?.todo}
          />
        );
      }}
      keyExtractor={({id}) => id}
    />
  );
};
const styles = StyleSheet.create({});
