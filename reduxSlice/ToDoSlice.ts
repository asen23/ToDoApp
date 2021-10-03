import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Todo } from "type"

interface ToDoState {
    ToDo: Todo[]
}

const initialState: ToDoState = {
    ToDo: [],
}

export const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<Todo>) => {
            state.ToDo.push(action.payload)
        },
        removeToDo: (state, action: PayloadAction<String>) => {
            state.ToDo.filter((t) => t.id != action.payload)
        },
        updateToDo: (
            state,
            action: PayloadAction<String>
        ) => {
            let idx = state.ToDo.findIndex((t) => t.id == action.payload)
            state.ToDo[idx].completed = !state.ToDo[idx].completed
        },
    },
})

export const { addToDo, removeToDo, updateToDo } = ToDoSlice.actions
export default ToDoSlice.reducer
