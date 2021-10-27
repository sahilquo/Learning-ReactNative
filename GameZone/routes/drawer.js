import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import About from '../screens/About';
import HomeStack from './homeStack';

const NavDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <NavigationContainer>
            <NavDrawer.Navigator>
                <NavDrawer.Screen name='HomeStack' component={HomeStack} />
                <NavDrawer.Screen name='About' component={About} />
            </NavDrawer.Navigator>
        </NavigationContainer>
    );
}

export default Drawer;