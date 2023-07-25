import * as SecureStore from 'expo-secure-store';

export async function setToken(value) {
  try {
    await SecureStore.setItemAsync('token', value);
    console.log('Token saved successfully');
  } catch (error) {
    console.log('Failed to save token:', error);
    throw error;
  }
}

export async function getToken() {
  try {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      console.log('Token retrieved successfully');
      return token;
    } else {
      console.log('No token found');
      return null;
    }
  } catch (error) {
    console.log('Failed to retrieve token:', error);
    throw error;
  }
}
