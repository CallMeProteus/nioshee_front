import { StyleSheet, Text, View, Dimensions , TouchableOpacity} from 'react-native'
import React from 'react';import { Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window')

const Header = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.main}>
        
        <View style={styles.container}>
        <Entypo name="menu" color={'purple'} size={35} onPress={()=>navigation.openDrawer()} />
        <TouchableOpacity style={{ width:'700%',justifyContent:'center', alignItems:'center'}} onPress={()=>navigation.navigate('home')}>
      <Text style={styles.heading}>Nioshee</Text>

        </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    main:{width:width, height:height/8.7, alignItems:'center', marginTop:20,},
    container:{width:'90%', height:height/8.6,flexDirection:'row' , alignItems:'center'},
    heading:{ fontSize:22,fontWeight:'900', paddingLeft:9,}

})