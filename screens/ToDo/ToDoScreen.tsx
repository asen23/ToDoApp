import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, FlatList } from "react-native"
import tw from "tailwind"
import { MaterialIcons } from "@expo/vector-icons"
import { v4 as uuid } from "uuid"
import ToDoItem from "./ToDoItem/ToDoItem"
import { addToDo, removeToDo, updateToDo } from "reduxSlice/ToDoSlice"
import { useAppSelector, useAppDispatch } from "hooks"

export default function ToDoScreen() {
    const [text, setText] = useState("")
    const todo = useAppSelector((state) => state.todo.ToDo)
    const [refreshing, setRefreshing] = useState(false)
    const dispatch = useAppDispatch()

    const addTodo = () => {
        dispatch(
            addToDo({
                id: uuid(),
                completed: false,
                todo: text,
            })
        )
        setText("")
    }

    const removeTodo = (id: String) => {
        dispatch(removeToDo(id))
    }

    const onChangeCompleted = (id: String) => {
        dispatch(updateToDo(id))
    }

    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => setRefreshing(false), 1000)
    }

    return (
        <View
            style={tw`flex-1 items-stretch m-2`}
        >
            <View
                style={tw`flex-row p-2 border border-black rounded-3xl bg-white`}
            >
                <TextInput
                    onChangeText={setText}
                    onSubmitEditing={addTodo}
                    value={text}
                    placeholder="Add todo"
                    style={tw`flex-1`}
                />
                <TouchableOpacity onPress={addTodo}>
                    <MaterialIcons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={todo}
                renderItem={({ item }) => (
                    <ToDoItem item={item} onRemove={removeTodo} onChangeCompleted={onChangeCompleted} />
                )}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </View>
    )
}
