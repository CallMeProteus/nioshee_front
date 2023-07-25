import {  DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { UserContext } from '../authContext/UserContext';
import React, { useContext, useState } from 'react';
import {View, Text,TouchableOpacity,  StyleSheet, Image, TextInput} from "react-native"
import * as ImagePicker from 'expo-image-picker';

export default function CustomDrawerContent(props) {
  const { user, updateUserField } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState(user.profile_picture);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
            updateUserField('profile_picture', result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };

    return (
      <DrawerContentScrollView {...props} style={{paddingTop:20}}>
         <TouchableOpacity onPress={()=>pickImageAsync()}>
        <View style={styles.profilePictureContainer}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          ) : (
            <Text style={styles.placeholderText}>Add Photo</Text>
          )}
        </View>
      </TouchableOpacity>
      <TextInput
        value={user.name}
        onChangeText={(value) => updateUserField('name',value)}
        style={styles.input}
      />

<TextInput
        value={user.profession}
        onChangeText={(value) => updateUserField('profession',value)}
        style={styles.input2}
      />
       
        <DrawerItem
          label="About Nioshee"
           onPress={() => alert('keeping 254 connected')}
          activeBackgroundColor="#ccc"
          inactiveBackgroundColor="#eee"
          labelStyle={{ color: 'black', fontWeight: 'bold', }}
          style={{ marginTop:60 }}
        />
     
        <DrawerItem
          label="Log out"
          onPress={() =>updateUserField('name',null)}
          icon={({ color, size }) => <AntDesign name="logout" color={color} size={size} />}
          activeBackgroundColor="#ccc"
          inactiveBackgroundColor="#eee"
          style={{ marginTop:50 }}
          labelStyle={{ color: 'black', fontWeight: 'bold',fontSize:20 }}
        />
      </DrawerContentScrollView>
    );
  }
  const styles = StyleSheet.create({
    main:{padding:40,backgroundColor:'snow', height:'100%' },
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
    input:{   height:40,fontSize:20, fontWeight:'bold', textAlign:'center', },
    input2:{   height:40,fontSize:20, textAlign:'center', },

    name:{    marginBottom:-8,backgroundColor:'snow',zIndex:2,width:"15%",  },
      profession:{
        marginBottom:-8,backgroundColor:'snow',zIndex:2,width:"26%", marginTop:6  },
      btn:{    marginVertical:8, width:'30%',alignSelf:'flex-end', borderRadius:6, overflow:'hidden'}
  });