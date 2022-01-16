import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { deliveryApi } from '../features/delivery/services/delivery.api';
import deliveryReducer    from '../features/delivery/services/delivery.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    delivery : deliveryReducer,
    [deliveryApi.reducerPath] : deliveryApi.reducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(deliveryApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
