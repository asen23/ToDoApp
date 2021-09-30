import { configureStore } from "@reduxjs/toolkit"
import ToDoReducer from "reduxSlice/ToDoSlice"

const store = configureStore({
    reducer: {
        todo: ToDoReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
