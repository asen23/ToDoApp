import React, { useState } from "react"
import PropTypes, { InferProps } from "prop-types"
import { TodoProp } from "type"
import tw from "tailwind"
import { ListItem, Button } from "react-native-elements"

function ToDoItem({ item, onRemove }: InferProps<typeof ToDoItem.propTypes>) {
    const [completed, setCompleted] = useState(item.completed)

    return (
        <ListItem.Swipeable
            key={item.id}
            rightContent={
                <Button
                    icon={{ name: "delete", color: "white" }}
                    // class="
                    buttonStyle={tw`bg-red-600 h-full w-full`}
                    // "
                    onPress={() => {
                        onRemove(item.id)
                    }}
                />
            }
            bottomDivider
        >
            <ListItem.Content
                // class="
                style={tw`flex-row justify-start`}
                // "
            >
                <ListItem.CheckBox
                    checked={completed}
                    onPress={() => setCompleted((c) => !c)}
                />
                <ListItem.Title
                    // class="
                    style={tw.style({ "line-through": completed })}
                    // "
                >
                    {item.todo}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem.Swipeable>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.exact(TodoProp).isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default ToDoItem
