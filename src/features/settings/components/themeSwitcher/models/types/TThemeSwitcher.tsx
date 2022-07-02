import {TUseChangeThem} from 'shared/hooks/useThemed/models/types/TUseChangeTheme.type';
import {TUseLocalization} from 'shared/models/types/localization.types/TUseLocalizations.type';

export type TThemeSwitcher = {
  theme: TUseChangeThem;
  translate: TUseLocalization['translate'];
};
