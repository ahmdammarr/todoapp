import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useLocalization} from 'shared/hooks/useLocalization/useLocalization';
import {ELanguages} from 'shared/enums';

const Main = () => {
  const{changeLanguage,translate} = useLocalization()
  return (
    <View style={styles.container}>
      <Text>{translate('test.test', 'test.test')}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            changeLanguage(ELanguages.ar);
          }}
          style={{margin: 2, padding: 20, backgroundColor: 'green'}}>
          <Text>Arabic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeLanguage(ELanguages.en);
          }}
          style={{margin: 2, padding: 20, backgroundColor: 'green'}}>
          <Text>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Main};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
