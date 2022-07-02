import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TTodoItemProps} from './models/types';
import {ThemedSecondaryView} from 'shared/components/ThemedSecondaryView';
import {scale, SCREEN_WIDTH} from 'utils/scaling';
import {Title} from 'shared/components/Title';
import {TodoStatus} from '../todoStatus';
import {CompleteButton} from '../completeButton';
import {useLocalization} from 'shared/hooks/useLocalization';

export const TodoItem = ({status, time, id, todo}: TTodoItemProps) => {
  const {translate} = useLocalization();
  return (
    <ThemedSecondaryView style={styles.container}>
      <Title text={todo} />
      <View>
        <TodoStatus status={translate('todos.pending')} id={id} />
      </View>
      <CompleteButton label={translate('todos.complete')} todoId={id} />
    </ThemedSecondaryView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 1.1,
    padding: scale(10),
    borderRadius: scale(8),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
