import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dog from "../screens/Dog";

const Stack = createStackNavigator();
export default function Navigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="dog" component={Dog} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}