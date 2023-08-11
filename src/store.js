import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentDayReducer from "./slices/currentDaySlice";
import mealsReducer from "./slices/mealsSlice";
import modalReducer from "./slices/modalSlice";
import { apiSlice } from "./slices/apiSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PERSIST,
  PAUSE,
  PURGE,
} from "redux-persist";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  days: currentDayReducer,
  meals: mealsReducer,
  modal: modalReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),

  devTools: true,
});

export const persister = persistStore(store);

export default store;
