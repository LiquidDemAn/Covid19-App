import {store} from './store';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
