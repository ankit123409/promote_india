// Sidebar.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons from react-native-vector-icons
import { push } from '../../navigation/RootNavigation';

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Image source={require("../Images/MaskGroup.png")}  style={{height:50,width:50}}/>

        {/* <Image
          source={{ uri: 'https://placehold.co/100' }} // Replace with your image URL
          style={styles.profileImage}
        /> */}
        <Text style={styles.name}>John Wick</Text>
        <Text style={styles.email}>johnwick23@gmail.com</Text>
      </View>

      <View style={styles.menuItems}>
        <MenuItem title="ContectList" icon="person-outline" route={"ImportContect"} />
        <MenuItem title="Add Contact" icon="person-add-outline" route={"AddContect"} />
        <MenuItem title="Manage Groups" icon="people-outline"  route={"AddGroups"} />
        <MenuItem title="Schedule Message" icon="people-outline"  route={"CreateScheduleMsg"} />

        <MenuItem title="Plans" icon="card-outline" route={"Plans"} />
        <MenuItem title="Refer and Earn" icon="gift-outline" route="Refer" />
        <MenuItem title="Wallet" icon="wallet-outline" route={"Wallet"} />
        <MenuItem title="Settings" icon="settings-outline" />
      </View>
    </View>
  );
};

const MenuItem = ({ title, icon ,route}) => (
  <TouchableOpacity onPress={()=>push(route )} style={styles.menuItem}>
    <Icon name={icon} size={24} color="#333" />
    <Text style={styles.menuItemText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default Sidebar;
