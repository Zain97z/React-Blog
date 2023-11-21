import {configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'iws',
    storage     
}

const persistAuthReduser = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        auth: persistAuthReduser,
    }
});

export const persistedStore = persistStore(store);