import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// pages
import Home from '../components/pages/HomePage';
import Films from '../components/pages/FilmsPage';
import PeoplePage from '../components/pages/PeoplePage';
import TemplatePeoples from '../components/template/TemplatePeoples';
import DropdownMenu from '../components/atoms/DropdownMenu';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerRight: () => <DropdownMenu />,
                    headerTitleAlign: 'left',
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Peliculas" component={Films} />
                <Stack.Screen name="Personajes" component={PeoplePage} />
                <Stack.Screen name="DetallesPersonaje" component={TemplatePeoples} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

