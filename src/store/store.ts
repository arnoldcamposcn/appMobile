import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './slice/peopleSlice.ts';

export const store = configureStore({
    reducer: {
        planet: planetReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
