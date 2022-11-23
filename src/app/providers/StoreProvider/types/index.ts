import {createReduxStore} from '../config/store';

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
