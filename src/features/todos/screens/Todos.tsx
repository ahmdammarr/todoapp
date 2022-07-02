import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {todosGQL} from '../gql/todos';

export const Todos = () => {
  const {data, error, loading} = useQuery(todosGQL);
  console.log('loading', loading, 'error', error, 'data', data);
  return (
    <View style={styles.container}>
      <Text>TodosScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
