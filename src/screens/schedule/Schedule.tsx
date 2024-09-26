import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Switch,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { ScheduleApi } from './ScheduleApi';


const Schedule = (props: any) => {
  console.log('props', props?.navigation);
  const [selected, setSelected] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [group, setGroup] = useState([]);


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  useEffect(()=>{
    getAllClientGrops()

  },[])
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Icon2 name="reorder-three" color={"#0A89FF"}  size={30}/>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontWeight:"600",fontSize:20,color:"#000000"}}>Schedule</Text> 

          </View>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../Images/MaskGroup.png")}  style={{height:50,width:50}}/>
            {/* <Text>images</Text> */}
          </View>
        </View>
        {/* calenders */}

        <View style={{borderWidth:1,borderColor:"#848282",borderRadius:10,margin:10,padding:2.5}}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
          />
        </View>

        {/* showdateWiseList */}
        <View>


          <View style={{margin:10}}>
            <Text style={{fontWeight:"600",fontSize:20,color:"#8A8A8A"}}>Today</Text>
            <View style={{flexDirection:"row",margin:5}}>
            <View>
              <Text style={{fontWeight:"600",fontSize:10,color:"#8A8A8A"}}>set</Text>
              <Text style={{fontWeight:"600",fontSize:20,color:"#000000"}}>24</Text>
              
            </View>
            <View style={{width:"92%",backgroundColor:"pink",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:10}}>
              <View>
                <Text  style={{fontWeight:"600",fontSize:15,color:"#ffffff"}}>Rakshabandan</Text>
              </View>
            </View>
            </View>
            <View style={{flexDirection:"row",margin:5}}>
            <View>
              <Text style={{fontWeight:"600",fontSize:13,color:"#8A8A8A"}}>sat</Text>
              <Text style={{fontWeight:"600",fontSize:20,color:"#000000"}}>24</Text>
              
            </View>
            <View style={{width:"92%",backgroundColor:"pink",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:10}}>
              <View>
                <Text  style={{fontWeight:"600",fontSize:15,color:"#ffffff"}}>Rakshabandan</Text>
              </View>
            </View>
            </View>
           

          </View>
        </View>
        {/* {showclientWiseList} */}

        <View style={{margin:10}}>
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
                  <View style={{flexDirection: 'row',justifyContent:"center",alignItems:"center"}}>
                    <Image source={require("../Images/lucide_edit.png")}  style={{height:25,width:25}}/>
                    {/* <Text>edit</Text> */}
                    <View style={styles.container2}>
                      <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  container2: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Schedule;
