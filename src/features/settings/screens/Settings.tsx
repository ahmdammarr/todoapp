import {StyleSheet} from 'react-native';
import React from 'react';
import {Title} from 'shared/components/Title';
import {LanguageSwitcher} from '../components/languageSwitcher';
import {useLocalization} from 'shared/hooks/useLocalization';
import {scale, scaleHeight} from 'utils/scaling';
import {ThemeSwitcher} from '../components/themeSwitcher';
import {useChangeTheme} from 'shared/hooks/useThemed';
import { ThemedView } from 'shared/components/ThemedView';

export const Settings = () => {
  const localization = useLocalization();
  const theme = useChangeTheme();
  const {translate} = localization;
  return (
    <ThemedView style={styles.container}>
      <Title text={translate('settings.title')} style={styles.title} />
      <ThemeSwitcher theme={theme} translate={localization['translate']} />
      <LanguageSwitcher localization={localization} />
    </ThemedView>
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
