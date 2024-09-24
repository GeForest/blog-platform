// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['user', 'authModal']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production', // режиме разработки
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

const persistor = persistStore(store)

export { store, persistor }