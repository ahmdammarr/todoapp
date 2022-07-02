import { ELanguages } from "shared/models/enums/localization.enums"

export type TLanguageItem ={
    onChangeLanguage:()=>void,
    title:string,
    isCurrentLang:boolean
}