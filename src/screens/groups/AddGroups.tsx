import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Image, Switch, ScrollView } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Header from '../../common/Header';
import { goBack } from '../../navigation/RootNavigation';
import CustomTextInput from '../../common/Customtextinput';
import { AddGroupApi } from './AddGroupApi';
import { ScheduleApi } from '../schedule/ScheduleApi';

const AddGroups = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [group, setGroup] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [id, setId] = useState('');


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(()=>{
    getAllClientGrops()

  },[])
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const getAllClientGrops =()=>{
    ScheduleApi.gelallgroups( (res:any) => {
      console.log("rseseses",res);
      setGroup(res)

      // navigate("BookingSucess")
      if(res){
        
      }
    }, (error: any, error_code: number) => {
    
      console.log("error",error);
      
    })
  }

  const toggleColorPicker = () => {
    setIsColorPickerVisible(!isColorPickerVisible);
  };
const handleSubmit=()=>{
    if(isEdit){
        let obj={
            groupName:groupName,
            groupDescription:groupDescription,
            customerID:"234",
            groupColor:selectedColor,
            _path:id
        }

        
            AddGroupApi.EditGroups(obj, (res:any) => {
              console.log("rseseses",res);
        
              // navigate("BookingSucess")
              if(res){
                getAllClientGrops()
                setGroupName("")
    setGroupDescription("")
    setSelectedColor("#FFFFFF")
    setisEdit(false)
    setId("")


                
              }
            }, (error: any, error_code: number) => {
            
              console.log("error",error);
              
            })

    }else{
        let obj={
            groupName:groupName,
            groupDescription:groupDescription,
            customerID:"234",
            groupColor:selectedColor
        }
            AddGroupApi.AddGroups(obj, (res:any) => {
              console.log("rseseses",res);
        
              // navigate("BookingSucess")
              if(res){
                getAllClientGrops()
                setGroupName("")
    setGroupDescription("")
    setSelectedColor("#FFFFFF")

    setisEdit(false)
    setId("")
                
              }
            }, (error: any, error_code: number) => {
            
              console.log("error",error);
              
            })
        
    }
  
    // console.log("selectedColor",obj)
    
    
}
const handleEdit=(item:any)=>{
    
    let data =item?.item
    setGroupName(data?.groupName)
    setGroupDescription(data?.groupDescription)
    setSelectedColor(data?.groupColor)
    setisEdit(true)
    setId(data._id)
    
    console.log("itemsss",data);
   
    

}
  return (
    <View style={styles.container}>
      <Header title="Manage Groups" onBackPress={() => goBack()} />

      <CustomTextInput
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
        style={styles.input}
      />
        <CustomTextInput
        placeholder="Group Description"
        value={groupDescription}
        onChangeText={setGroupDescription}
        style={styles.input}
      />

      {/* Color input-like field */}
      <TouchableOpacity style={styles.colorInputContainer} onPress={toggleColorPicker}>
        <Text style={styles.colorInputLabel}>Choose Color</Text>
        <View style={[styles.colorPreviewBox, { backgroundColor: selectedColor }]} />
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>handleSubmit()} style={styles.saveButton}>
        {
    isEdit ?   <Text style={styles.saveButtonText}>Edit</Text> :  <Text style={styles.saveButtonText}>Save</Text>

        }
       
       

      </TouchableOpacity>

      {/* Color Picker Modal */}
      <Modal
        visible={isColorPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleColorPicker}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.colorPickerContainer}>
            <ColorPicker
              color={selectedColor}
              onColorChange={handleColorChange}
              thumbSize={30}
              sliderSize={30}
              noSnap={true}
              row={false}
              swatches={true}
              swatchesLast={false}
              swatchesOnly={false}
              discrete={false}
              style={styles.colorPicker}
            />
            
            {/* Footer Button */}
            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.doneButton} onPress={toggleColorPicker}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView style={{margin:10}}>
          <Text style={{fontWeight:"600",fontSize:20,color:"#0A89FF",marginBottom:15}} >Groups</Text>
          <FlatList
            data={group}
            renderItem={item => {
              console.log("item",item?.item);
              
              return (
                <View
                  style={{
                    width: '100',
                    height: 50,
                    backgroundColor: item?.item?.groupColor,
                    borderRadius: 10,
                    flexDirection: 'row',
                    marginBottom:10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{marginLeft:10,justifyContent:"center"}}>
                    <Text style={{fontWeight:"500",fontSize:15,color:"#000000",textAlign:"center"}} >{item?.item?.groupName}</Text>
                    <Text style={{fontWeight:"500",fontSize:10,color:"#787878"}}>210 contect</Text>
                  </View>
                  <TouchableOpacity onPress={()=>handleEdit(item)} style={{flexDirection: 'row',justifyContent:"center",alignItems:"center"}}>
                    <Image source={require("../Images/lucide_edit.png")}  style={{height:25,width:25}}/>
                    {/* <Text>edit</Text> */}
                    </TouchableOpacity >
                  <View>

                      <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                  </View>
              );
            }}
          />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 20,
  },
  colorInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  colorInputLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  colorPreviewBox: {
    width: 30,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPickerContainer: {
    width: '80%',
    flex:0.5,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  colorPicker: {
    width: '100%',
    height: 250,
  },
  modalFooter: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddGroups;
