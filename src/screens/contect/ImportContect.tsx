import React, { useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Switch, Image, FlatList } from 'react-native';
import Header from '../../common/Header';
import { goBack, navigate, push } from '../../navigation/RootNavigation';
import { ContectApi } from './ContectApi';

const ImportContact = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isEnabled, setIsEnabled] = React.useState({});
  const [contacts, setContacts] = React.useState([]);


useEffect(()=>{
  getAllContect()

},[])
const navigateContect=(data:any)=>{
  console.log("data",data);
  navigate("AddContect",{
    data:data,
    isEdit:true
  })
  

}
const getAllContect=()=>{
  ContectApi.getAllContect((res) => {
    if (res) {
      console.log("Response:", res);
      setContacts(res)
    }
  }, (error, error_code) => {
    console.log("Error:", error);
  });
}


  
  const toggleSwitch = (id) => {
    setIsEnabled((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <Header title={'Import Contact'} onBackPress={()=>goBack()
       } />
      {/* <Text style={styles.title}>Import Contact</Text> */}
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search contact"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>
      
      {/* Contact List */}
      {/* <ScrollView style={styles.scrollContainer}>
        {contacts.map((contact) =>{
          console.log("contact",contact);
          
        
      
      </ScrollView> */}
      <FlatList data={contacts}  renderItem={(item:any)=>{
        let contact=item?.item
        console.log();
        
        
        return(
      
        

          <View key={contact.id} style={styles.contactCard}>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.contactName}</Text>
              <Text style={styles.contactDetails}>{contact.contactphoneNumber}</Text>
              <Text style={styles.contactDetails}>{ "Date of Birth : " + contact.dob}</Text>
              <Text style={styles.contactDetails}>{ "Anniversary : " + contact.anniversary}</Text>

            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.iconButton} onPress={()=>navigateContect(contact)}>
              <Image source={require("../Images/lucide_edit.png")}  style={{height:25,width:25}}/>

                {/* <Text style={styles.iconText}>✏️</Text> Edit icon */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                {/* <Text style={styles.iconText}>🗑️</Text> Delete icon */}
              </TouchableOpacity>
              <Switch
                value={isEnabled[contact.id]}
                onValueChange={() => toggleSwitch(contact.id)}
              />
            </View>
          </View>
        )}}
        // keyExtractor={item?id}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contactCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
  },
  contactDetails: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  iconText: {
    fontSize: 16,
  },
});

export default ImportContact;
