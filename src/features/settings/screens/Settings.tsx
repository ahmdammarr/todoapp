import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Title} from 'shared/components/Title';
import {LanguageSwitcher} from '../components/languageSwitcher';
import {useLocalization} from 'shared/hooks/useLocalization';
import {scale, scaleHeight} from 'utils/scaling';
import {ThemeSwitcher} from '../components/themeSwitcher';
import {useChangeTheme} from 'shared/hooks/useThemed';

export const Settings = () => {
  const localization = useLocalization();
  const theme = useChangeTheme();
  const {translate} = localization;
  return (
    <View style={styles.container}>
      <Title text={translate('settings.title')} style={styles.title} />
      <ThemeSwitcher theme={theme} translate={localization['translate']} />
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
