// ProfileUpdate.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const ProfileUpdate = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [qualification, setQualification] = useState('');

  const handleUpdate = () => {
    // Perform API call to update the user's profile
    // Replace the API call with your actual implementation
    if (name && email && experience && skills && qualification) {
      Alert.alert('Success', 'Profile updated successfully!');
      // Reset the form
      setPhoto('');
      setName('');
      setEmail('');
      setExperience('');
      setSkills('');
      setQualification('');
    } else {
      Alert.alert('Error', 'Please fill in all fields correctly.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Photo"
        onChangeText={text => setPhoto(text)}
        value={photo}
      />
      <TextInput
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Past Experience"
        onChangeText={text => setExperience(text)}
        value={experience}
      />
      <TextInput
        placeholder="Skill Sets"
        onChangeText={text => setSkills(text)}
        value={skills}
      />
      <TextInput
        placeholder="Educational Qualification"
        onChangeText={text => setQualification(text)}
        value={qualification}
      />
      <Button title="Update Profile" onPress={handleUpdate} />
    </View>
  );
};

export default ProfileUpdate;
