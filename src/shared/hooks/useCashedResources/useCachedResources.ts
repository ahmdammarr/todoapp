import i18n from 'i18n-js';
import { getItem, setItem } from "utils/localStorage";
import { EStorageKeys } from "shared/models/enums/storage.enums";
import { useEffect, useState } from "react";
import { ELanguages } from "shared/models/enums/localization.enums";
import { I18nManager } from 'react-native'
import { setTheme } from 'shared/storeSlices/ThemeSlice';
import { useAppDispatch } from '../useAppDispatch';

export const useCachedResources = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [isThemeLoading, setIsThemeLoading] = useState(true);
  const [IsSplashOn, setIsSplashOn] = useState(true)
  const dispatch = useAppDispatch();


  useEffect(() => {
    setTimeout(()=>setIsSplashOn(false),3000)
    }, [])
  //getLanguage
  getItem(EStorageKeys.language).then((language) => {
    if (!language) {
      setItem(EStorageKeys.language, ELanguages.en);
      i18n.locale = ELanguages.en;
      I18nManager.forceRTL(false);
      setIsLanguageLoading(false)
    } else {
      i18n.locale = language.res as string
      setIsLanguageLoading(false)
    }
  });

  //get theme
  getItem(EStorageKeys.theme).then(({ res }) => {
    if (res) dispatch(setTheme(res));
    setIsThemeLoading(false);
  });
  return {
    isLoading: isLanguageLoading && isThemeLoading,
    IsSplashOn
  };
};
