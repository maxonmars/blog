import {useDispatch} from 'react-redux';
import type {AppDispatch} from 'app/providers/StoreProvider/types/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
