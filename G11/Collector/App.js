import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgregarColectorScreen from './screens/AddCollectorScreen';
import ListarColectoresScreen from './screens/ListCollectorsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Agregar Colector" component={AgregarColectorScreen} options={{ tabBarLabel: 'Agregar Colector' }} />
        <Tab.Screen name="Listar Colectores" component={ListarColectoresScreen} options={{ tabBarLabel: 'Listar Colectores' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
