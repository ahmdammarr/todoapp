import {StyleSheet, View,Text} from 'react-native';
import React from 'react';
import {ThemedText} from 'shared/components/ThemedText';
import {TodoInfoProps} from './models/types';
import {scaleHeight} from 'utils/scaling';
import { success } from 'assets/colors';

export const TodoInfo = ({status, time}: TodoInfoProps) => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.status}>{status}</ThemedText>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scaleHeight(6),
    justifyContent:'flex-start'
  },
  status: {
    opacity: 0.5,
  },
  time:{
    color: success
  }
});
