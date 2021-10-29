import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './routes/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;