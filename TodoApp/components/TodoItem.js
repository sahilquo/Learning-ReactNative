import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const TodoItem = ({ item, pressHandler }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.item}>{item.value}</Text>
            <TouchableOpacity onPress={() => pressHandler(item)}>
                <Icon name='delete' size={24} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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