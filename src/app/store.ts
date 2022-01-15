import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { deliverySlice } from '../features/delivery/delivery.api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [deliverySlice.reducerPath] : deliverySlice.reducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(deliverySlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
