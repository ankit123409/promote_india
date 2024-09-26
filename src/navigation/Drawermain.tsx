// import { View, Text, Dimensions } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import Schedule from '../screens/schedule/Schedule'
// import SideMenu from '../screens/sidemenu/SideMenu'
// import AddContect from '../screens/contect/AddContect'

// const Drawermain = () => {
// const Drawer = createDrawerNavigator()
// const renderDrawer=()=>{
//     return(
//       <Drawer.Screen options={{
//         headerShown: false
//     }} component={Schedule} name={"Schedule"} />
    
        
//     )

// }

//   return (
//     <Drawer.Navigator  screenOptions={{headerShown:false}}initialRouteName="Schedule">
//     <Drawer.Screen name="Schedule" component={Schedule} />
//     <Drawer.Screen name="AddContect" component={AddContect} />
//   </Drawer.Navigator>
//   )
// }

// export default Drawermain

// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../screens/sidemenu/SideMenu';
import Schedule from '../screens/schedule/Schedule';

const Drawer = createDrawerNavigator();

function Drawermain() {
  return (
      <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props) => <SideMenu {...props} />}>
        {/* Add your screen components here */}
     <Drawer.Screen   name="Schedule" component={Schedule} />

      </Drawer.Navigator>
  );
}

export default Drawermain;
