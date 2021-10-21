import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import Button from './Button';

const AddTodo = ({ addTodoListener }) => {

    const [todo, setTodo] = useState('');

    const onClicked = () => {
        if (todo.length >= 3) {
            Keyboard.dismiss();
            addTodoListener(todo);
            setTodo('')
        } else {
            Alert.alert('Warning!', 'Todo must contain atleast 3 characters.');
        }
    }

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
                    onClick={onClicked}
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