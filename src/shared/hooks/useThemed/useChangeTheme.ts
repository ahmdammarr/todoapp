import { useTheme, setTheme } from "shared/storeSlices/ThemeSlice";
import { setItem } from "utils/localStorage";
import { EThemes } from "shared/models/enums/theme.enums";
import { EStorageKeys } from "shared/models/enums/storage.enums";
import { useAppDispatch } from "../useAppDispatch";

export const useChangeTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isDarkTheme = theme === EThemes.dark;
  const selectedTheme = isDarkTheme ? EThemes.light : EThemes.dark;
  const changeTheme = () => {
    setItem(EStorageKeys.theme, selectedTheme).then(() => {
      dispatch(setTheme(selectedTheme));
    })
  };
  return {
    changeTheme,
    isDarkTheme,
  };
};
