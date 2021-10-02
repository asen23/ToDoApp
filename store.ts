import { createStore, combineReducers } from "redux"
import ToDoReducer from "reduxSlice/ToDoSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistReducer, persistStore } from "redux-persist"

const rootReducer = combineReducers({
    todo: ToDoReducer,
})


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
