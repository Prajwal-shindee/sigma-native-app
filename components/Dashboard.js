// Dashboard.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleProfileUpdate = () => {
    navigation.navigate('ProfileUpdate');
  };

  return (
    <View>
      <Text>Welcome to the Dashboard!</Text>
      <Button title="Update Profile" onPress={handleProfileUpdate} />
    </View>
  );
};

export default Dashboard;
