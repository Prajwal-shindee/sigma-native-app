import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPanel from './components/LoginPanel';
import RegistrationPanel from './components/RegistrationPanel';
import Dashboard from './components/Dashboard';
import ProfileUpdate from './components/ProfileUpdate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPanel} />
        <Stack.Screen name="Registration" component={RegistrationPanel} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 