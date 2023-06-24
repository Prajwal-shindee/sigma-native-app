// LoginPanel.js

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const LoginPanel = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const { phoneNumber, password } = formData;

  const navigation = useNavigation();

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Perform API call to authenticate user's credentials
    // Replace the API call with your actual implementation
    if (phoneNumber === "admin" && password === "admin") {
      Alert.alert("Success", "Login successful!");
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("Error", "Invalid phone number or password.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Phone Number"
          onChangeText={(value) => handleChange(value, "phoneNumber")}
          value={phoneNumber}
        />
        <TextInput
          placeholder="Password"
          name="password"
          onChangeText={(value) => handleChange(value, "password")}
          value={password}
          secureTextEntry
          style={styles.inputStyles}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Don't have an account? Register here"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    gap: 6,
  },
  inputStyles: {
    marginTop: 10,
  },
});

export default LoginPanel;
