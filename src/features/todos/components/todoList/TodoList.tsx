import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {TTodoListProps} from './models/types';
import {TodoItem} from '../todoItem/TodoItem';
import {EStatus} from 'features/todos/models/enums/ETodo.enums/EStatus.enum';
import {UseCompleteTodo} from 'features/todos/hooks/useUpdateTodos/UseCompleteTodo';

export const TodoList = ({todos}: TTodoListProps) => {
  const {completeTodo, loading, error} = UseCompleteTodo();
  return (
    <FlatList
      data={todos}
      contentContainerStyle={styles.container}
      renderItem={({item}) => {
        const {id, created_at, todo} = item;
        const onComplete =()=> completeTodo(id);
        return (
          <TodoItem
            status={EStatus.pending}
            time={created_at}
            todo={todo}
            loading={loading}
            error={error}
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
