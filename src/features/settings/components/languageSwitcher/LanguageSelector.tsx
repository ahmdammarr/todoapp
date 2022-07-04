import {View} from 'react-native';
import React from 'react';
import {TLanguageSelector} from './models/types';
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
