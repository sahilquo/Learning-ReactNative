import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import About from '../screens/About';
import Home from '../screens/Home';
import MovieList from '../screens/MovieList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name='Home'
                component={Home} />

            <Drawer.Screen
                name='About'
                component={About} />

            <Drawer.Screen
                name='Movie List'
                component={MovieList} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;