import React from 'react';
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

const About = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.boldText}>About Screen</Text>
            <Button title='Back' onPress={() => {
                navigation.navigate('Home');
            }} />
        </View>
    );
}

export default About;