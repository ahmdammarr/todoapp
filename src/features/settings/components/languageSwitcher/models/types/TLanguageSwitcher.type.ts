import { ELanguages } from "shared/models/enums/localization.enums";

export type TLanguageSelector = {
    languages: ELanguages[];
    langTitls: {
      [ELanguages.ar]: string;
      [ELanguages.en]: string;
    };
    onChangeLanguage: (language: ELanguages) => void;
    isCurrentLanguage: (language: ELanguages) => boolean;
  };