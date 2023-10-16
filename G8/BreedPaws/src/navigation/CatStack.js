import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cat from "../screens/Cat";

const Stack = createStackNavigator();
export default function Navigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="cat" component={Cat} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}