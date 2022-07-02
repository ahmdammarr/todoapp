import { ELanguages } from "shared/models/enums/localization.enums";

export type TUseLocalization = {
    changeLanguage: (language: ELanguages) => Promise<void>;
    isArabic: boolean;
    isRTL: boolean;
    translate: (name: string, params?: {}) => string;
    getCurrentLanguage: () => string;
    isCurrentLanguage: (lang: ELanguages) => boolean;
    languages: ELanguages[];
}