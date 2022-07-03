import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TTodoItemProps} from './models/types';
import {ThemedSecondaryView} from 'shared/components/ThemedSecondaryView';
import {scale, scaleHeight, scaleWidth, SCREEN_WIDTH} from 'utils/scaling';
import {Title} from 'shared/components/Title';
import {TodoInfo} from '../TodoInfo';
import {ActionButton} from '../completeButton';
import {useLocalization} from 'shared/hooks/useLocalization';
import {EButtonVariants} from '../completeButton/models/enums';

export const TodoItem = ({
  status,
  time,
  todo,
  onItemPressed,
}: TTodoItemProps) => {
  const {translate} = useLocalization();
  return (
    <ThemedSecondaryView style={styles.container}>
      <Title text={todo} />
      <TodoInfo status={status} time={'1234'} />
      <ActionButton
        label={translate('todos.complete')}
        style={styles.complete}
        variant={EButtonVariants.primary}
        onPress={onItemPressed}
      />
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
    marginBottom: scaleHeight(20),
  },
  complete: {
    width: '100%',
  },
});
