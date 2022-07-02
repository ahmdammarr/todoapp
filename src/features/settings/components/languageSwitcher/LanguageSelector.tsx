import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ThemedText} from 'shared/components/ThemedText';
import {CheckIcon} from '../svgs/checkIcon';
import {TLanguageSelector} from './models/types';

export const LanguageSelector = ({
  languages,
  onChangeLanguage,
  isCurrentLanguage,
  langTitls,
}: TLanguageSelector) => {
  return (
    <>
      {languages.map(language => {
        const onChnageLang = () => onChangeLanguage(language);
        const isCurrentLang = isCurrentLanguage(language);
        return (
          <TouchableOpacity
            key={language}
            style={styles.languageContainer}
            onPress={onChnageLang}>
            <ThemedText style={styles.langItem}>
              {langTitls[language]}
            </ThemedText>
            {isCurrentLang && <CheckIcon />}
          </TouchableOpacity>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  langItem: {paddingVertical: 4},
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
