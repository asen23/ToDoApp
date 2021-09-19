import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, FlatList, Text } from "react-native"
import tw from "tailwind"
import { MaterialIcons } from "@expo/vector-icons"
import { Todo } from "type"
import { v4 as uuid } from "uuid"
import ToDoItem from "./ToDoItem/ToDoItem"

export default function ToDoScreen() {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState<Todo[]>([])

    const addTodo = () => {
        setTodo((todo) => [
            ...todo,
            { id: uuid(), completed: false, todo: text },
        ])
        setText("")
    }

    return (
        <View
            // class="
            style={tw`flex-1 items-stretch m-2`}
            // "
        >
            <View
                // class="
                style={tw`flex-row p-2 border border-black rounded-3xl bg-white`}
                // "
            >
                <TextInput
                    onChangeText={setText}
                    onSubmitEditing={() => addTodo()}
                    value={text}
                    placeholder="Add todo"
                    // class="
                    style={tw`flex-1`}
                    // "
                />
                <TouchableOpacity onPress={() => addTodo()}>
                    <MaterialIcons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={todo}
                renderItem={({ item }) => <ToDoItem item={item} />}
            />
        </View>
    )
}
