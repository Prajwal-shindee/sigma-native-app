// RegistrationPanel.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const RegistrationPanel = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleRegister = () => {
    // Perform API call to register the user
    // Replace the API call with your actual implementation
    if (
      phoneNumber &&
      email &&
      name &&
      password &&
      password === rePassword
    ) {
      Alert.alert('Success', 'Registration successful!');
      // Reset the form
      setPhoneNumber('');
      setEmail('');
      setName('');
      setPassword('');
      setRePassword('');
    } else {
      Alert.alert('Error', 'Please fill in all fields correctly.');
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
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        placeholder="Re-type Password"
        onChangeText={text => setRePassword(text)}
        value={rePassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationPanel;
