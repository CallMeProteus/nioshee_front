import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { UserContext } from '../authContext/UserContext';
import { useNavigation } from '@react-navigation/native';
import { sendPhoneNumber, getWorkers } from '../api/client';
import PhoneInput from 'react-native-phone-input';

const ContactNumber = () => {
  const { user, updateUserField } = useContext(UserContext);
  const [phoneNumber, setPhoneNumber] = useState('+254');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigation = useNavigation();
  

  const handleInputChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSave = () => {
    const isValidPhoneNumber = /^(\+\d{3})(\d{9})$/.test(phoneNumber);
    if (isValidPhoneNumber) {
      setError('');
      setIsLoading(true); // Start loading

      updateUserField('contact_number', phoneNumber);

          navigation.navigate('verify');

      // sendPhoneNumber(phoneNumber)
      //   .then((response) => {
      //     updateUserField('contact_number', phoneNumber);
      //     console.log(response);

      //     navigation.navigate('verify');
      //   })
      //   .catch((error) => {
      //     // Handle the error
      //     console.log(error);
      //   })
      //   .finally(() => {
      //     setIsLoading(false); // Stop loading
      //   });
    } else {
      setError('Invalid phone number. Please enter a 10-digit number.');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.label}>Phone Number</Text>
        <PhoneInput textStyle={{ fontSize: 19 }} onChangePhoneNumber={handleInputChange} initialCountry='ke' style={styles.input} />
        {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
        <TouchableOpacity style={styles.btn}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFFFF" /> // Show loading indicator
          ) : (
            <Button title="Ok" onPress={handleSave} color={'#331800'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { width: '100%', height: '100%', backgroundColor: 'snow' },
  container: { flex: 1, justifyContent: 'center', width: '90%', alignSelf: 'center', backgroundColor: 'snow' },
  input: { borderWidth: 0.7, borderRadius: 7, height: 55, paddingLeft: 10 },
  label: { marginBottom: -8, backgroundColor: 'snow', zIndex: 2, width: '26%' },
  btn: { marginVertical: 8, width: '30%', alignSelf: 'flex-end', borderRadius: 6, overflow: 'hidden' }
});

export default ContactNumber;
