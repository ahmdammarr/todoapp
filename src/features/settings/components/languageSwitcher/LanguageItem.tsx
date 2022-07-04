import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {TLanguageItem} from './models/types/TLanguageItem.type';
import {ThemedText} from 'shared/components/ThemedText';
import {CheckIcon} from '../svgs/checkIcon';
import {scaleHeight} from 'utils/scaling';

const LanguageItem = ({
  onChangeLanguage,
  title,
  isCurrentLang,
}: TLanguageItem) => {
  return (
    <TouchableOpacity
      style={styles.languageContainer}
      onPress={onChangeLanguage}>
      <ThemedText style={styles.langItem}>{title}</ThemedText>
      {isCurrentLang && <CheckIcon style={styles.icon} />}
    </TouchableOpacity>
  );
};

export {LanguageItem};

const styles = StyleSheet.create({
  langItem: {paddingVertical: scaleHeight(4)},
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    marginTop: scaleHeight(10),
  },
});
