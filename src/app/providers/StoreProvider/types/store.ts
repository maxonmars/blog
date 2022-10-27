import {createReduxStore} from 'app/providers/StoreProvider';

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
