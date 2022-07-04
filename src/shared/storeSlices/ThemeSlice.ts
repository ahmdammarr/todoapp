import { createSlice } from "@reduxjs/toolkit"
import { EStores } from "shared/models/enums/store.enums";
import { TRootState } from "shared/models/types/store.types";
import { useAppSelector } from "shared/hooks/useAppSelector";

const defaultMood = ''
export const themeSlice = createSlice({
  name: EStores.theme,
  initialState: defaultMood ,
  reducers: {
    setTheme: (state, action)=> state = action.payload
  }
})



export const { setTheme } = themeSlice.actions

const themeReducer = themeSlice.reducer;
const selectTheme = (state:Pick<TRootState,EStores.theme>) => state.theme
const useTheme = () => useAppSelector(selectTheme);


export {
    themeReducer,
    useTheme
}