import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './Screens/login';
import HomeScreen from './Screens/home';
import signUp from './Screens/signUp';

const Stack = createStackNavigator();
const App =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signUp" headerMode="none">
        <Stack.Screen name="Login" component={login}  options={{ title: 'login' }}/>
          <Stack.Screen name="signUp" component={signUp} options={{ title: 'Sign up' }}/>
         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
