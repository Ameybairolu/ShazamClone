import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamCoreApi } from "./services/shazamCore";

export const store = configureStore({
	reducer: {
		[shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
		player: playerReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
