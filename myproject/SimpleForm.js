import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const SimpleForm = () => {
    const [name, setName] = useState('Sahil');
    const [age, setAge] = useState('27');

    // const updateNameClickListener = () => {
    //   if (name === 'Sahil')
    //     setName('Palvi');
    //   else
    //     setName('Sahil');
    // };

    return (
        <View style={styles.container}>
            <Text>My name is {name} and I'm {age} years old.</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Name'
                value={name}
                textContentType='name'
                onChangeText={(value) => { setName(value) }}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Age'
                keyboardType='numeric'
                value={age}
                onChangeText={(value) => { setAge(value) }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    input: {
        padding: 6,
        margin: 8,
        borderColor: '#e2e2e2',
        borderWidth: 1,
        width: '80%'
    }
});

export default SimpleForm;