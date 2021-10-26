import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetail from '../screens/ReviewDetail';
import HeaderTitle from '../components/HeaderTitle';

const Stack = createNativeStackNavigator();

const homeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: '#fff'
                }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'My Home',
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }} />
                <Stack.Screen
                    name="ReviewDetail"
                    component={ReviewDetail}
                    options={({ route }) => ({
                        title: route.params.title,
                        headerTitle: () => <HeaderTitle />
                    })} />
                <Stack.Screen
                    name="About"
                    component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default homeStack;