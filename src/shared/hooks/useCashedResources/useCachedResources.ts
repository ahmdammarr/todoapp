import i18n from 'i18n-js';
import { getItem, setItem } from "utils/localStorage";
import { EStorageKeys } from "shared/enums/EstorageKeys.enum";
import { useState } from "react";
import { ELanguages } from "shared/enums";
import { I18nManager } from 'react-native'

export const useCachedResources = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);

  getItem(EStorageKeys.language).then((language) => {
    if (language === undefined) {
      setItem(EStorageKeys.language, ELanguages.en);
      i18n.locale = ELanguages.en;
      I18nManager.forceRTL(false);
      setIsLanguageLoading(false)
    } else {
      i18n.locale = language.res as string
      setIsLanguageLoading(false)
    }
  });

  return {
    isLoading: isLanguageLoading,
  };
};
