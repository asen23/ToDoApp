import { NativeStackScreenProps } from '@react-navigation/native-stack'
import PropTypes from 'prop-types'

export type StackParamList = {
    "To Do": undefined,
}

export type StackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<StackParamList, Screen>

export type Todo = {
    id: string,
    completed: boolean,
    todo: string,
}

export var TodoProp = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    todo: PropTypes.string.isRequired,
}