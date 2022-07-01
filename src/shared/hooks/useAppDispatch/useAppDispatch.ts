import { useDispatch } from 'react-redux';
import type { TAppDispatch  } from 'shared/models/types/store.types';


export const useAppDispatch = () => useDispatch<TAppDispatch>();
