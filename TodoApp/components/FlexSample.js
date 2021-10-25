import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const FlexSample = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxone}>Box 1</Text>
            <Text style={styles.boxtwo}>Box 2</Text>
            <Text style={styles.boxthree}>Box 3</Text>
            <Text style={styles.boxfour}>Box 4</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    boxone: {
        padding: 10,
        backgroundColor: 'blue'
    },
    boxtwo: {
        flex: 1,
        padding: 20,
        backgroundColor: 'yellow'
    },
    boxthree: {
        padding: 30,
        backgroundColor: 'coral'
    },
    boxfour: {
        padding: 40,
        backgroundColor: 'green'
    }
});

export default FlexSample;