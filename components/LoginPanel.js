// LoginPanel.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginPanel = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform API call to authenticate user's credentials
    // Replace the API call with your actual implementation
    if (phoneNumber === '1234567890' && password === 'password') {
      Alert.alert('Success', 'Login successful!');
    } else {
      Alert.alert('Error', 'Invalid phone number or password.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Phone Number"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginPanel;
