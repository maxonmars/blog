import type {TypedUseSelectorHook} from 'react-redux';
import {useSelector} from 'react-redux';
import type {RootState} from 'app/providers/StoreProvider/types/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
