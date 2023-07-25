import React, { useContext, useState,useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { postWorkers } from '../api/client';
import { UserContext } from '../authContext/UserContext';
import * as ImagePicker from 'expo-image-picker';

const UserProfile = () => {
  const { user, updateUserField } = useContext(UserContext);

  const [profilePicture, setProfilePicture] = useState(user.profile_picture);
  const [name, setName] = useState(null);
  const [profession, setProfession] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
      updateUserField('profile_picture', result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };

  const handleSave = () => {
    updateUserField('name', name)
    updateUserField('profession', profession)

postWorkers(user).then((success) => {
  if (success) {
    console.log('worker retrieved succesfully');
    
    
  } else {
    console.log('API request failed');
    // Handle the failure case
  }
})
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>pickImageAsync()}>
        <View style={styles.profilePictureContainer}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          ) : (
            <Text style={styles.placeholderText}>Add Photo</Text>
          )}
        </View>
      </TouchableOpacity>

      <Text style={styles.name}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={(value) => setName(value)}
        style={styles.input}
        placeholder='required'
      />

  
      <Text style={styles.profession}>What do you do:</Text>
      <TextInput
        value={profession}
        onChangeText={(value) => setProfession(value)}
        style={styles.input}
      />

      <Text>Availability:</Text>
      <TextInput
        value={user.availability}
        onChangeText={(value) => updateUserField('availability', value)}
      />

<TouchableOpacity style={styles.btn} >
      <Button title="Ok" onPress={handleSave} color={'#331800'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{padding:40,backgroundColor:'snow', height:'100%', marginTop:40 },
  profilePictureContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 75,
    overflow: 'hidden',
    alignSelf:'center'
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input:{    borderWidth:.7, borderRadius:7,height:50,fontSize:30,paddingLeft:10  },
  name:{    marginBottom:-8,backgroundColor:'snow',zIndex:2,width:"15%",  },
    profession:{
      marginBottom:-8,backgroundColor:'snow',zIndex:2,width:"30%", marginTop:6  },
    btn:{    marginVertical:8, width:'30%',alignSelf:'flex-end', borderRadius:6, overflow:'hidden'}
});

export default UserProfile;
