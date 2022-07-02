import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ThemedText} from 'shared/components/ThemedText';
import {CheckIcon} from '../svgs/checkIcon';
import {TLanguageSelector} from './models/types';
import {scaleHeight} from 'utils/scaling';
import {LanguageItem} from './LanguageItem';

export const LanguageSelector = ({
  languages,
  onChangeLanguage,
  isCurrentLanguage,
  langTitls,
}: TLanguageSelector) => {
  return (
    <View>
      {languages.map(language => {
        const onChnageLang = () => onChangeLanguage(language);
        const isCurrentLang = isCurrentLanguage(language);
        return (
          <LanguageItem
            key={language}
            title={langTitls[language]}
            isCurrentLang={isCurrentLang}
            onChangeLanguage={onChnageLang}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});
