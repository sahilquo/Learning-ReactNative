import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AddTodo from './components/AddTodo';
import FlexSample from './components/FlexSample';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App = () => {

  const [todos, setTodo] = useState([
    { value: 'Call someone', key: '1' },
    { value: 'Have Lunch', key: '2' },
    { value: 'Make Project', key: '3' },
  ]);

  const pressHandler = (item) => {
    console.log(item.value);
    setTodo((oldTodos) => {
      return oldTodos.filter(oldTodo => oldTodo.key != item.key);
    })
  };

  const addTodoListener = (newTodo) => {
    console.log(newTodo);
    setTodo((oldTodos) => {
      return [
        ...oldTodos,
        { value: newTodo, key: Math.random().toString() }
      ];
    })
  }

  // return (
  //   <FlexSample />
  // );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo
          addTodoListener={addTodoListener}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 8
  },
  list: {
    flex: 1,
    marginVertical: 8,
  }
});

export default App;
