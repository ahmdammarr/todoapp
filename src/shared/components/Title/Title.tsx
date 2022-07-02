import {StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';

type TTitle = {text: string};
const Title = ({text,...props}: TTitle & TextProps) => {
  const {style} = props
  return <Text style={[styles.title,style]}>{text}</Text>;
};

export {Title};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
});
