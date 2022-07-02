import {StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import { ThemedText } from '../ThemedText';

type TTitle = {text: string};
const Title = ({text,...props}: TTitle & TextProps) => {
  const {style} = props
  return <ThemedText style={[styles.title,style]}>{text}</ThemedText>;
};

export {Title};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
});
