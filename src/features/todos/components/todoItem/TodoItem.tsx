import {StyleSheet} from 'react-native';
import React from 'react';
import {TTodoItemProps} from './models/types';
import {ThemedSecondaryView} from 'shared/components/ThemedSecondaryView';
import {scale, scaleHeight, SCREEN_WIDTH} from 'utils/scaling';
import {Title} from 'shared/components/Title';
import {TodoInfo} from '../TodoInfo';
import {ActionButton} from '../completeButton';
import {useLocalization} from 'shared/hooks/useLocalization';
import {EButtonVariants} from '../completeButton/models/enums';
import {format} from 'date-fns';
import {parseISO} from 'date-fns/esm';

export const TodoItem = ({
  time,
  todo,
  onItemPressed,
  error,
  loading,
}: TTodoItemProps) => {
  const {translate} = useLocalization();
  const formatedTime = format(parseISO(time as string), 'dd/mm/yyyy');
  return (
    <ThemedSecondaryView style={styles.container}>
      <Title text={todo} />
      <TodoInfo status={translate('todos.pending')} time={formatedTime} />
      <ActionButton
        label={translate('todos.complete')}
        style={styles.complete}
        variant={EButtonVariants.primary}
        loading={loading}
        error={error}
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
