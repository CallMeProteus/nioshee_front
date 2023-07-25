import * as SecureStore from 'expo-secure-store';

// Example object with multiple properties



export const setWorker = (workerData) => {
    const serializedUser = JSON.stringify(workerData);
    SecureStore.setItemAsync('worker', serializedUser)
    .then(() => {
      console.log('Object saved successfully');
    })
    .catch((error) => {
      console.log('Failed to save object:', error);
    });
};

export const getWorker = () => {
    SecureStore.getItemAsync('worker')
    .then((serializedUser) => {
      if (serializedUser) {
        // Convert the serialized object back to its original form (deserialization)
        const worker = JSON.parse(serializedUser);
        return worker
      } else {
        console.log('Object not found in secure store');
      }
    })
    .catch((error) => {
      console.log('Failed to retrieve object:', error);
    });
};