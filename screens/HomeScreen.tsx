import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, FlatList, Text } from "react-native"
import tw from "tailwind"
import { MaterialIcons } from "@expo/vector-icons"
import { Todo } from "type"

export default function ToDoScreen() {
    const [text, setText] = useState("")
    const [inputIsActive, setInputIsActive] = useState(false)
    const [todo, setTodo] = useState<Todo[]>([])

    return (
        <View
            // class="
            style={tw`flex-1 items-stretch m-2`}
            // "
        >
            <View
                // class="
                style={tw`flex-row p-2 border border-black rounded-3xl`}
                // "
            >
                <TextInput
                    onChangeText={setText}
                    value={text}
                    placeholder="Add todo"
                    onBlur={() => setInputIsActive(false)}
                    onFocus={() => setInputIsActive(true)}
                    // class="
                    style={tw.style("flex-1", {
                        "border-transparent": inputIsActive,
                    })}
                    // "
                />
                <TouchableOpacity
                    onPress={() => {
                        setTodo((todo) => [
                            ...todo,
                            { completed: false, todo: text },
                        ])
                        setText("")
                    }}
                >
                    <MaterialIcons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={todo}
                renderItem={({ item }) => <Text>{item.todo}</Text>}
            />
        </View>
    )
}
