import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-gesture-handler';
import {TThemeSwitcher} from './models/types';
import {Title} from 'shared/components/Title';
import {scaleHeight} from 'utils/scaling';

export const ThemeSwitcher = ({translate, theme}: TThemeSwitcher) => {
  const {changeTheme, isDarkTheme} = theme;
  const onSwitch = () => changeTheme();
  return (
    <View style={styles.container}>
      <Title text={translate('settings.theme.title')} />
      <Switch value={isDarkTheme} onChange={onSwitch} thumbColor={'greens'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleHeight(10),
  },
});
