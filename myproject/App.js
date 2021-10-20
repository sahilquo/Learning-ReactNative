import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {

  const [name, setName] = useState('Sahil');

  const updateNameClickListener = () => {
    if (name === 'Sahil')
      setName('Palvi');
    else
      setName('Sahil');
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={updateNameClickListener} />
      </View>
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
  buttonContainer: {
    marginTop: 20
  },
  boldtext: {
    fontWeight: 'bold'
  }
});

export default App;
