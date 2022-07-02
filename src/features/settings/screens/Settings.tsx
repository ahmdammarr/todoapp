import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Title} from 'shared/components/Title';
import {LanguageSwitcher} from '../components/languageSwitcher';
import {useLocalization} from 'shared/hooks/useLocalization';
import {scale, scaleHeight} from 'utils/scaling';

export const Settings = () => {
  const localization = useLocalization();
  const {translate} = localization;
  return (
    <View style={styles.container}>
      <Title text={translate('settings.title')} style={styles.title} />
      <LanguageSwitcher localization={localization} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
  },
  title: {
    paddingVertical: scaleHeight(10),
  },
});
