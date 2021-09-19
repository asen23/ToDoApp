import React, { useState } from "react"
import { View, Text } from "react-native"
import PropTypes, { InferProps } from "prop-types"
import { TodoProp } from "type"
import tw from "tailwind"
import { CheckBox } from "react-native-elements"

function ToDoItem({ item }: InferProps<typeof ToDoItem.propTypes>) {
    const [completed, setCompleted] = useState(item.completed)

    return (
        <View
            // class="
            style={tw`p-4 my-2 flex-row border-black border rounded-lg items-center`}
            // "
        >
            <CheckBox
                checked={completed}
                onPress={() => setCompleted((c) => !c)}
            />
            <Text
                key={item.id}
                // class="
                style={tw.style(completed && "line-through")}
                // "
            >
                {item.todo}
            </Text>
        </View>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.exact(TodoProp).isRequired,
}

export default ToDoItem
