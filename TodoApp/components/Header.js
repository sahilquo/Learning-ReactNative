import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My TODO's</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#c10230',
        padding: 16,

    },
    title: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})


export default Header;