import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Button from './Button';

const AddTodo = ({ addTodoListener }) => {

    const [todo, setTodo] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={todo}
                multiline
                placeholder={`What's in your mind?`}
                style={styles.input}
                selectionColor='#c10230'
                onChangeText={(value) => {
                    setTodo(value);
                }}
            />
            <View style={styles.button}>
                <Button
                    title='Add Todo'
                    onClick={() => {
                        addTodoListener(todo);
                        setTodo('')
                    }}
                // backgroundStyle={{ backgroundColor: 'black' }}
                // textStyle={{ color: 'red' }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 32,
        paddingHorizontal: 24
    },
    button: {
        marginTop: 12
    }
})

export default AddTodo;