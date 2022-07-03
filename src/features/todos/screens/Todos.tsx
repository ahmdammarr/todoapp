import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TodoList} from '../components/todoList';
import {scale, scaleWidth} from 'utils/scaling';
import {ErrorAnimated} from 'shared/components/ErrorAnimated';
import {Loader} from 'shared/components/Loader';
import {useFetchTodos} from '../hooks/useFetchTodos';
import {EFetchStatus} from '../models/enums/ETodo.enums/EFetchStatus.enum';

export const Todos = () => {
  const {todos, fetchStatus} = useFetchTodos();

  const content: {[key: string]: React.ReactElement} = {
    [EFetchStatus.error]: <ErrorAnimated
    testID='errorUi'
    style={styles.error} />,
    [EFetchStatus.loading]: <Loader 
    testID='loader'
    style={styles.loader} />,
    [EFetchStatus.done]: <TodoList todos={todos} />,
  };
  return (
    <View style={styles.container}>{content[fetchStatus]}</View>
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
