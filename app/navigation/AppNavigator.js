import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import CustomDrawerContent from "./CustomDrawerContent";
import WorkerListScreen from '../components/WorkerListScreen';
import WorkerScreen from '../components/WorkerScreen';

const AppNavigator=()=> {
  
  const Drawer = createDrawerNavigator();

    return (
          <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />} >
            <Drawer.Screen options={{headerShown:false, }} name="home" component={WorkerListScreen} />
            <Drawer.Screen options={{headerShown:false, }} name="worker" component={WorkerScreen} />

          </Drawer.Navigator>
 
        )
}
export default AppNavigator















