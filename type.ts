import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type StackParamList = {
    "To Do": undefined,
}

export type StackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<StackParamList, Screen>

export type Todo = {
    completed: boolean,
    todo: string,
}