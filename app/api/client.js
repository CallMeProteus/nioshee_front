import Apisauce from 'apisauce';
import { setToken, getToken } from './tokenHandler';
import { setWorker } from './authStorage';


const api = Apisauce.create({
  baseURL: 'http://192.168.0.77:8000/api/',
});

export const sendPhoneNumber = async (phoneNumber) => {
  try {
    const response = await api.post('user/otp/', { 'phone_number':phoneNumber });
    if (response.ok) {
      // Handle the successful response here
      console.log('Phone number sent successfully');
      return response.data;
    } else {
      // Handle non-200 response here
      console.log('Failed to send phone number');
      console.log(response.problem); // Example: Log the error description
      throw new Error(response.problem);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.log(error);
    throw error;
  }
};

export const sendOTPAndRetrieveAccessToken = async (phoneNumber, otp) => {
  try {
    const response = await api.post('user/verify/', {'phone_number':phoneNumber, 'verification_code':otp });

    const accessToken = response.data.token;
      if (accessToken){
      setToken(accessToken);
      
    }
   
    return true; // Return true indicating success
  } catch (error) {
    // Handle error
    console.log(error);
    throw error;
  }
};




export const postWorkers = async (user) => {
  try {
    const token = getToken(); // Get the token from storage
    const response = await api.post('workers/', user, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    if (response.ok) {
      // Handle the successful response here
      console.log(response.data);
      setWorker(user);
      return true;
    } else {
      // Handle non-200 response here
      console.log('Failed to post workers');
      console.log(response.problem); // Example: Log the error description
      throw new Error(response.problem);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.log(error);
    throw error;
  }
};

  

  export const getWorkers = async () => {
    try {
      const response = await api.post('workers/');
      if (response.ok) {
        // Handle the successful response here
    
        console.log(response.data);
        return response.data;
      } else {
        // Handle non-200 response here
        console.log('Failed to send phone number');
        console.log(response.problem); // Example: Log the error description
        throw new Error(response.problem);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.log(error);
      throw error;
    }
  };