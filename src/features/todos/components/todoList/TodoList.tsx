import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {TTodoListProps} from './models/types';
import {TodoItem} from '../todoItem/TodoItem';
import {EStatus} from 'features/todos/models/enums/ETodo.enums/EStatus.enum';
import {UseCompleteTodo} from 'features/todos/hooks/useUpdateTodos/UseCompleteTodo';
import { AddTodoInput } from '../addTodoInput';

export const TodoList = ({todos}: TTodoListProps) => {
  const {completeTodo, selectedTodId, loading, error} = UseCompleteTodo();
  return (
    <FlatList
      data={todos}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<AddTodoInput/>}
      renderItem={({item}) => {
        const {id, created_at, todo} = item;
        const onComplete = () => completeTodo(id);
        const isSelectedItem = selectedTodId === id;
        const isLoading = loading && isSelectedItem;
        const isError = error && isSelectedItem;
        return (
          <TodoItem
            time={created_at}
            todo={todo}
            loading={isLoading}
            error={isError}
            onItemPressed={onComplete}
          />
        );
      }}
      keyExtractor={({id}) => id}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    //width:SCREEN_WIDTH,
    justifyContent: 'center',
  },
});
