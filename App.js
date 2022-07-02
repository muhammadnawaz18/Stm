import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyNav from './Navigation/MyNav';

const App = () => {
  return (
    <NavigationContainer>
      <MyNav />
    </NavigationContainer>
  );
};

export default App;
