import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DogStack from './DogStack';
import CatStack from './CatStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function Navigation() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="cat" component={CatStack} options={{
                title: 'Cats',
                tabBarIcon: () => (
                    <Icon name="cat" color={"#688b9d"} size={25}/>
                )}}
            />
            <Tab.Screen name="dog" component={DogStack} options={{
                title: 'Dogs',
                tabBarIcon: () => (
                    <Icon name="dog" color={"#688b9d"} size={25}/>
                )}}
            />
        </Tab.Navigator>
    );
}