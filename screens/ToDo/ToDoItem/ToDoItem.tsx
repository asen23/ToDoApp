import React, { useState } from "react"
import PropTypes, { InferProps } from "prop-types"
import { TodoProp } from "type"
import tw from "tailwind"
import { ListItem, Button } from "react-native-elements"

function ToDoItem({ item, onRemove, onChangeCompleted }: InferProps<typeof ToDoItem.propTypes>) {

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
                    checked={item.completed}
                    onPress={() => onChangeCompleted(item.id)}
                />
                <ListItem.Title
                    // class="
                    style={tw.style({ "line-through": item.completed })}
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
    onChangeCompleted: PropTypes.func.isRequired,
}

export default ToDoItem
