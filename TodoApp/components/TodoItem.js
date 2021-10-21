import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => pressHandler(item)}
        >
            <Text style={styles.item}>{item.value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 6,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    item: {
        fontSize: 16
    }
})

export default TodoItem;