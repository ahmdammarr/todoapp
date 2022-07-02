import i18n from 'i18n-js';
import {EStorageKeys} from 'shared/models/enums/storage.enums';
import {ELanguages} from 'shared/models/enums/localization.enums';
import {I18nManager} from 'react-native';
import {setItem} from 'utils/localStorage';
import RNRestart from 'react-native-restart';
import { TUseLocalization } from 'shared/models/types/localization.types/TUseLocalizations.type';

export const useLocalization = ():TUseLocalization => {
    
  const changeLanguage = async (language: ELanguages) => {
    if (i18n.currentLocale() === language) {
      return;
    } else {
      await setItem(EStorageKeys.language, language);
      i18n.locale = language;
      I18nManager.forceRTL(language === ELanguages.ar);
      RNRestart.Restart();
    }
  };

  function translate(name: string, params = {}) {
    return i18n.t(name, params);
  }

  const getCurrentLanguage = () => i18n.currentLocale();
  const isCurrentLanguage = (lang:ELanguages) => i18n.currentLocale() === lang
  const isArabic = i18n.currentLocale() === ELanguages.ar;
  const isRTL = I18nManager.isRTL;
  const languages = Object.values(ELanguages);
  
  return {
    changeLanguage,
    isArabic,
    isRTL,
    translate,
    getCurrentLanguage,
    isCurrentLanguage,
    languages
  };
};
