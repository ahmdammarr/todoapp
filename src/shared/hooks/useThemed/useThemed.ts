import { colors } from "assets/colors";
import { EThemes } from "shared/models/enums/theme.enums";
import { TColors } from "shared/models/types/theme.types";
import { useTheme } from "shared/storeSlices/ThemeSlice";

export const useThemed = (
  props: TColors,
  colorName: keyof typeof colors.light & keyof typeof colors.dark
) => {
  const theme = useTheme();
  const isDarkTheme = theme === EThemes.dark;

  const selectedTheme = isDarkTheme ? EThemes.dark : EThemes.light;
  const colorFromProps = props[selectedTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors[selectedTheme][colorName];
  }
};
