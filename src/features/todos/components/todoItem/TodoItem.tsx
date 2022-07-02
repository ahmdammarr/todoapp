import {StyleSheet} from 'react-native';
import React from 'react';
import {TTodoItemProps} from './models/types';
import {ThemedText} from 'shared/components/ThemedText';
import {ThemedSecondaryView} from 'shared/components/ThemedSecondaryView';
import {scale, scaleWidth} from 'utils/scaling';

export const TodoItem = ({status, time, todo}: TTodoItemProps) => {
  return (
    <ThemedSecondaryView style={styles.container}>
      <ThemedText>{todo}</ThemedText>
    </ThemedSecondaryView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
  },
});
