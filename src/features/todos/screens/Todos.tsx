import {StyleSheet} from 'react-native';
import React from 'react';
import {ThemedView} from 'shared/components/ThemedView';
import {TodoList} from '../components/todoList';
import {scale, scaleWidth} from 'utils/scaling';
import {ErrorAnimated} from 'shared/components/ErrorAnimated';
import {Loader} from 'shared/components/Loader';
import {useFetchTodos} from '../hooks/useFetchTodos';
import {EFetchStatus} from '../models/enums/ETodo.enums/EFetchStatus.enum';

export const Todos = () => {
  const {todos, fetchStatus} = useFetchTodos();

  const content: {[key: string]: React.ReactElement} = {
    [EFetchStatus.error]: <ErrorAnimated style={styles.error} />,
    [EFetchStatus.loading]: <Loader style={styles.loader} />,
    [EFetchStatus.done]: <TodoList todos={todos} />,
  };
  return (
    <ThemedView style={styles.container}>{content[fetchStatus]}</ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {},
  loader: {
    width: scaleWidth(200),
  },
});
