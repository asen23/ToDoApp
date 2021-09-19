import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ToDoScreen from "screens/ToDo/ToDoScreen"
import { StackParamList } from "type"
import "react-native-get-random-values"

const Stack = createNativeStackNavigator<StackParamList>()

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="To Do" component={ToDoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
