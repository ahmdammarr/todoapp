import {StyleSheet} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {todosGQL} from '../gql/todos';
import {ThemedView} from 'shared/components/ThemedView';
import {TodoList} from '../components/todoList';
import {scale} from 'utils/scaling';

export const Todos = () => {
  const {data, error, loading} = useQuery(todosGQL);
  const todos = data?.todos?.data;
  return (
    <ThemedView style={styles.container}>
      <TodoList todos={todos} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
    flex: 1,
  },
});
