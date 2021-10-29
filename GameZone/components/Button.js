import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, backgroundStyle, textStyle, onClick }) => {
    return (
        <TouchableOpacity
            style={[styles.button, backgroundStyle]}
            onPress={() => onClick()}
        >
            <Text
                style={[styles.text, textStyle]}
            >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: '#00ACAC',
        padding: 12,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase'
    }
});

export default Button;