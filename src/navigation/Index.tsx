// AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import Schedule from '../screens/schedule/Schedule';
import Drawermain from './Drawermain';
import { navigationRef } from './RootNavigation'; // Assuming RootNavigation is correctly set up for navigation actions
import spalce from '../screens/splace/spalce';
import Plans from '../screens/plans/Plans';
import Refer from '../screens/refer/Refer';
import Wallet from '../screens/wallet/wallet';
import AddContect from '../screens/contect/AddContect';
import AddGroups from '../screens/groups/AddGroups';
import ImportContect from '../screens/contect/ImportContect';
import CreateScheduleMsg from '../screens/schedule/CreateScheduleMsg';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="spalce" // Adjusted to match the component name
        screenOptions={{ headerShown: false }}
      >
        {/* Splash Screen */}
        <Stack.Screen name="spalce" component={spalce} />

        {/* Main Drawer Navigation */}
        <Stack.Screen name="Schedule" component={Drawermain} />

        {/* Auth Screens */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Plans" component={Plans} />
        <Stack.Screen name="Refer" component={Refer} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="AddContect" component={AddContect} />
        <Stack.Screen name="AddGroups" component={AddGroups} />
        <Stack.Screen name="ImportContect" component={ImportContect} />
        <Stack.Screen name="CreateScheduleMsg" component={CreateScheduleMsg} />

        
        


        

        

        

        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
