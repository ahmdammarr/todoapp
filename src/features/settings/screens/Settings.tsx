import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Title} from 'shared/components/Title';
import {LanguageSwitcher} from '../components/languageSwitcher';
import {useLocalization} from 'shared/hooks/useLocalization';

export const Settings = () => {
  const localization = useLocalization();
  const {translate} = localization;
  return (
    <View style={styles.container}>
      <Title text={translate('settings.title')} />
      <LanguageSwitcher localization={localization} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
