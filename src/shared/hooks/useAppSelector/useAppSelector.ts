import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from 'shared/models/types/store.types';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
