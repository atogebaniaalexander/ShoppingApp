import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';
import { StatusBar } from 'expo-status-bar';
import signUpScreen from './screens/signUp';
import loginScreen from './screens/login';

const Stack = createStackNavigator();
const App =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={loginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
