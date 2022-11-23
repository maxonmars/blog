import type {TypedUseSelectorHook} from 'react-redux';
import {useSelector} from 'react-redux';
import type {RootState} from 'app/providers/StoreProvider';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
