import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ReviewDetail from '../screens/ReviewDetail';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Drawer'
                component={DrawerNavigator} />
            <Stack.Screen
                name='ReviewDetail'
                component={ReviewDetail}
                options={{
                    title: 'Review Detail'
                }} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator