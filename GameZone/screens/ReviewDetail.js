import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';


const ReviewDetail = ({ route, navigation }) => {
    const { title } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.boldText}>{title}</Text>
            <Button
                title='Change'
                onPress={() => navigation.setOptions({ title: 'Hello' })} />
        </View>
    );
}

export default ReviewDetail;