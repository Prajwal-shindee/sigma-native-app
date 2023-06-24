// API.js

// Import necessary dependencies for API requests
import axios from 'axios';

// Base URL for your API
const BASE_URL = 'https://api.example.com';

// Function to perform login API call
export const login = async (phoneNumber, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      phoneNumber,
      password,
    });
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error for error handling
  }
};

// Function to perform registration API call
export const register = async (phoneNumber, email, name, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      phoneNumber,
      email,
      name,
      password,
    });
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error for error handling
  }
};

// Function to perform profile update API call
export const updateProfile = async (photo, name, email, experience, skills, qualification) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile`, {
      photo,
      name,
      email,
      experience,
      skills,
      qualification,
    });
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error for error handling
  }
};
