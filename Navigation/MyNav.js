import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Flash from '../components/Flash';
import Signin from '../components/Signin';
import Home from '../components/Home';
import Class from '../components/Class';
import Classes from '../components/Classes';
import BookIt from '../components/BookIt';
import Booked from '../components/Booked';

const Stack = createStackNavigator();

export default function MyNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Flash" component={Flash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Class" component={Class} />
      <Stack.Screen name="Classes" component={Classes} />
      <Stack.Screen name="BookIt" component={BookIt} />
      <Stack.Screen name="Booked" component={Booked} />
    </Stack.Navigator>
  );
}
