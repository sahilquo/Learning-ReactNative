import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        padding: 8,
        marginHorizontal: 12,
        marginVertical: 6,
        elevation: 3,
        backgroundColor: '#fff',
    }
});

export default Card;