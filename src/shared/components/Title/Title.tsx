import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type TTitle = {text: string};
const Title = ({text}: TTitle) => {
  return <Text style={styles.title}>{text}</Text>;
};

export {Title};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
});
