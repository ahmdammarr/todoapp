import i18n from "i18n-js";
import { translations } from './translations'

i18n.fallbacks = true;
const { en, ar } = translations
i18n.translations = { en, ar };

export default i18n;
