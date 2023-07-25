import React, { useContext, useState, } from 'react';
import { View, Text, TextInput, Button , StyleSheet, TouchableOpacity }from 'react-native';
import { UserContext } from '../authContext/UserContext';
import { useNavigation } from '@react-navigation/native';
import { sendOTPAndRetrieveAccessToken } from '../api/client';

const Verify_number = () => {
  const { user, updateUserField } = useContext(UserContext);
  const [otp, setotp] = useState('');
  const navigation = useNavigation()

  const handleInputChange = (value) => {setotp(value);};

  const handleSave = () => {
    sendOTPAndRetrieveAccessToken(user.contact_number, otp)
      .then(() => {
        
          navigation.navigate('profile');}
      )
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  };
  

  return (
    <View style={styles.main}>
    <View style={styles.container}>
        <Text style={styles.heading}> Verification message sent for: {user.contact_number}</Text>
      <Text style={styles.label} >Enter code:</Text>
      <TextInput value={otp} onChangeText={handleInputChange} keyboardType="numeric" style={styles.input} />
      <TouchableOpacity style={styles.btn} >
      <Button title="Ok" onPress={handleSave} color={'#331800'} />
      </TouchableOpacity>
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  main:{width:"100%", height:'100%', backgroundColor:'snow'},heading:{fontSize:20, marginBottom:20},
  container: {    flex: 1,    justifyContent: 'center',    width:'90%', alignSelf:'center',backgroundColor:'snow'
  },input:{    borderWidth:.7, borderRadius:7,height:50,fontSize:30,paddingLeft:10  },label:{
    marginBottom:-8,backgroundColor:'snow',zIndex:2,width:"23%",  },btn:{    marginVertical:8, width:'30%',alignSelf:'flex-end', borderRadius:6, overflow:'hidden'
  }


})
export default Verify_number;