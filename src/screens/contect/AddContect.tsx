import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../../common/Header';
import { goBack } from '../../navigation/RootNavigation';
import CustomTextInput from '../../common/Customtextinput';
import CommonDatePicker from '../../common/DatePicker';
import CustomButton from '../../common/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScheduleApi } from '../schedule/ScheduleApi';
import { ContectApi } from './ContectApi';

const AddContact = (props:any) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dob, setDob] = useState(new Date());
  const [anniversary, setAnniversary] = useState(new Date());
  const [group, setGroup] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  // const [items, setItems] = useState([
  //   { label: 'Client', value: 'client' },
  //   { label: 'Friends & Family', value: 'friends_family' },
  //   { label: 'Leads', value: 'leads' },
  // ]);
  useEffect(()=>{
    console.log("props",);
    if(props?.route?.params?.isEdit){
      let data = props?.route?.params?.data
      setContactName(data?.contactName)
      setContactNumber(data?.contactphoneNumber)
      setDob(data?.dob)
      setGroup(data?.groupID)
      // setAnniversary(data?.)

    }
    
    getAllClientGrops()

  },[])
  const getAllClientGrops =()=>{
    ScheduleApi.gelallgroups( (res:any) => {
      console.log("rseseses",res);
      setGroup(res)

      // navigate("BookingSucess")
      if(res){
        const formattedGroups = res.map(group => ({
          label: group.groupName,
          value: group._id,
        }));
    
        setItems(formattedGroups);
        
      }
    }, (error: any, error_code: number) => {
    
      console.log("error",error);
      
    })
  }

  const handleAddContact = () => {
    if (!contactName || !contactNumber || !group) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    let params = {
      contactName,
      contactphoneNumber: contactNumber,
      contactEmail: "avbpatel147@gmail.com",
      contactDescription: "1234",
      dob: dob.toISOString().split('T')[0],
      anniversary: anniversary.toISOString().split('T')[0],
      groupID: group,
      customerID: "123",
    };

    ContectApi.addContect(params, (res) => {
      if (res) {
        console.log("Response:", res);
      Alert.alert('contect added');
      setContactName("")
      setContactNumber('')
      setDob(new Date())
      setAnniversary(new Date())
      setItems([])
      }
    }, (error, error_code) => {
      console.log("Error:", error);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Add Contact" onBackPress={() => goBack()} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Contact Name</Text>
        <CustomTextInput 
          placeholder="Contact Name" 
          value={contactName} 
          onChangeText={setContactName} 
        />
        
        <Text style={styles.label}>Contact Number</Text>
        <CustomTextInput 
          placeholder="Contact Number" 
          value={contactNumber} 
          onChangeText={setContactNumber} 
          keyboardType="numeric"
        />

        <Text style={styles.label}>DOB</Text>
        <CommonDatePicker 
          initialDate={dob}
          onConfirm={(date) => setDob(date)} 
        />

        <Text style={styles.label}>Anniversary</Text>
        <CommonDatePicker 
          initialDate={anniversary}
          onConfirm={(date) => setAnniversary(date)} 
        />

        <Text style={styles.label}>Group</Text>
        <DropDownPicker
          open={open}
          value={group}
          items={items}
          setOpen={setOpen}
          setValue={setGroup}
          setItems={setItems}
          placeholder="Select Group"
          containerStyle={{ marginBottom: 20 }}
          style={styles.dropdown}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        />

        <CustomButton title= { props?.route?.params?.isEdit ? "Edit  Contect" : "Add Contact"} onPress={handleAddContact} />
      </ScrollView>
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  label: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
  },
});
