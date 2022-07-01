import { EStores } from "shared/models/enums/store.enums";
import { store } from "store";

export type TRootState = {
    [EStores.theme]: any
};