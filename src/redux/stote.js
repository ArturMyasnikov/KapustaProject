import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice } from './authSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];

const userPersistConfig = {
	key: 'user',
	storage,
	whitelist: ['refreshToken', 'sid'],
};

export const store = configureStore({
	reducer: {
		user: persistReducer(userPersistConfig, userSlice.reducer),
	},
	middleware,
});

export const persistor = persistStore(store);
