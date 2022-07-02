import {StyleSheet} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {todosGQL} from '../gql/todos';
import {ThemedView} from 'shared/components/ThemedView';
import {TodoList} from '../components/todoList';
import {scale} from 'utils/scaling';
import {ErrorAnimated} from 'shared/components/ErrorAnimated';
import {Loader} from 'shared/components/Loader';

export const Todos = () => {
  const {data, error, loading} = useQuery(todosGQL);
  const todos = data?.todos?.data;
  if (error) return <ErrorAnimated />;
  if (loading) return <Loader />;
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
