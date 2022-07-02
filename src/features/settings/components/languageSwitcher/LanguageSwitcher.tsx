import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ELanguages} from 'shared/models/enums/localization.enums';
import {Title} from 'shared/components/Title';
import {LanguageSelector} from './LanguageSelector';
import {TUseLocalization} from 'shared/models/types/localization.types/TUseLocalizations.type';

export const LanguageSwitcher = ({
  localization,
}: {
  localization: TUseLocalization;
}) => {
  const {translate, languages, isCurrentLanguage, changeLanguage} =
    localization;
  const langTitles = {
    [ELanguages.ar]: translate('settings.languages.arabic'),
    [ELanguages.en]: translate('settings.languages.english'),
  };
  return (
    <View style={styles.container}>
      <Title text={translate('settings.languages.title')} />
      <LanguageSelector
        isCurrentLanguage={isCurrentLanguage}
        langTitls={langTitles}
        languages={languages}
        onChangeLanguage={changeLanguage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'flex-start'},
  title: {fontWeight: '600', marginBottom: 6},
});
