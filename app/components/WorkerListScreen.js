import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';
import useFetch from '../api/useFetch';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';



const WorkerListScreen = () => {
  const [workers] = useFetch("/workers/");
  const navigation = useNavigation()


  const renderWorker = ({ item }) => (
    <TouchableOpacity style={styles.workerContainer} onPress={()=>navigation.navigate('worker', {item:{item}})}>
      <Image source={{ uri: item.profile_picture }} style={styles.profilePicture} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.profession}>{item.profession}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={workers}
        renderItem={renderWorker}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  listContent: {
    paddingVertical: 16,
  },
  workerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width:'90%',alignSelf:'center'

  },
  profilePicture: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profession: {
    fontSize: 14,
    color: '#888',
  },
});

export default WorkerListScreen;
