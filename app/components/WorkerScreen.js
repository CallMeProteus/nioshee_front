import { View, Text, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import React from 'react';import { FontAwesome, AntDesign} from '@expo/vector-icons';
import Header from './Header';


const WorkerScreen = ({ route, navigation }) => {
 
    const {item} = route.params;
   const worker = item.item
   const {width, height} = Dimensions.get('window')
   
  
  const handleCall = () => {
    // Implement your call functionality here
    Linking.openURL(`tel:${worker.contact_number}`)
  };

  const handleText = () => {
    // Implement your text functionality here
    console.log('Texting worker...');
  };

  return (
    <>
    <Header/>
     <View style={{margin:20,justifyContent:'center', alignItems:'center'}}>  
      <Image source={{uri:worker.profile_picture}} style={{ width: '100%', height: height/2.3 ,borderRadius:10 }} />

      <Text style={{fontSize:25, fontWeight:'bold'}}>{worker.name}</Text>
      <Text style={{fontSize:20, }} > {worker.profession}</Text>
 
<View style={{marginTop:30, display:'flex', width:'90%', flexDirection:'row', justifyContent:'space-around'}}>
<TouchableOpacity onPress={handleCall}>
      <FontAwesome name="phone" color={'purple'} size={20} />
        <Text>Call</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleText}>
      <AntDesign name="message1" color={'purple'} size={20} />
        <Text>Text</Text>
      </TouchableOpacity>
</View>
    
    </View>
    </>
   
  );
};

export default WorkerScreen;
