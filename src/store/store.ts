import {configureStore} from '@reduxjs/toolkit';
import { EStores } from 'shared/models/enums/store.enums';
import { themeReducer } from 'shared/storeSlices/ThemeSlice';

export const store = configureStore({
  reducer: {
    [EStores.theme]: themeReducer,

  },
});