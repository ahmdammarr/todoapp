import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { AnimatedView } from 'shared/components/AnimatedView';
import { animations } from 'assets/animations';

export const EmptyTodos = () => {
  return (
  <AnimatedView animation={animations.emptyTodos}/>
  );
};

const styles = StyleSheet.create({});
