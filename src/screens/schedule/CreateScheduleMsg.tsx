import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import Svg, { Rect, Circle, Path } from 'react-native-svg';
import Header from '../../common/Header';
import { goBack } from '../../navigation/RootNavigation';
import CommonDatePicker from '../../common/DatePicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScheduleApi } from './ScheduleApi';
import CustomTextInput from '../../common/Customtextinput';

const CreateScheduleMsg = () => {
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [image, setImage] = useState(null);
  const [dob, setDob] = useState(new Date());
  const [group, setGroup] = useState(null);
  const [openGroup, setOpenGroup] = useState(false);
  const [itemsGroup, setItemsGroup] = useState([]);
  const [contactName, setContactName] = useState('');
  const [language, setLanguage] = useState(null);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [itemsLanguage, setItemsLanguage] = useState([
    { label: 'English', value: 'en' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Spanish', value: 'es' }
  ]);

  // Predefined frames data
  const frames = [
    { id: 'rect-frame', type: 'rect', color: 'blue', strokeWidth: 5, cornerRadius: 20 },
    { id: 'circle-frame', type: 'circle', color: 'green', strokeWidth: 5, radius: 150 },
    { id: 'heart-frame', type: 'path', color: 'red', strokeWidth: 5, path: 'M150 290 L60 170 A50 50 0 1 1 150 100 A50 50 0 1 1 240 170 Z' },
  ];

  useEffect(() => {
    getAllClientGroups();
  }, []);

  const getAllClientGroups = () => {
    ScheduleApi.gelallgroups(
      (res) => {
        const formattedGroups = res.map(group => ({
          label: group.groupName,
          value: group._id,
        }));
        setItemsGroup(formattedGroups);
      },
      (error, error_code) => {
        console.log('Error fetching groups', error);
      }
    );
  };

  // Open Image Picker
  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  // Frame rendering logic
  const renderFrame = (frame) => {
    switch (frame.type) {
      case 'rect':
        return (
          <Svg height="100%" width="100%" style={styles.frameOverlay}>
            <Rect
              x="5%"
              y="5%"
              width="90%"
              height="90%"
              stroke={frame.color}
              strokeWidth={frame.strokeWidth}
              fill="none"
              rx={frame.cornerRadius}
            />
          </Svg>
        );
      case 'circle':
        return (
          <Svg height="100%" width="100%" style={styles.frameOverlay}>
            <Circle
              cx="50%"
              cy="50%"
              r={frame.radius}
              stroke={frame.color}
              strokeWidth={frame.strokeWidth}
              fill="none"
            />
          </Svg>
        );
      case 'path':
        return (
          <Svg height="100%" width="100%" viewBox="0 0 300 400" style={styles.frameOverlay}>
            <Path
              d={frame.path}
              stroke={frame.color}
              strokeWidth={frame.strokeWidth}
              fill="none"
            />
          </Svg>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Header title={'Schedule Message'} onBackPress={() => goBack()} />

      {/* Time Picker */}
      <Text style={styles.label}>Time</Text>
      <CommonDatePicker
        initialDate={dob}
        type="time"
        onConfirm={(date) => setDob(date)}
      />

      {/* Image Section */}
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text>Select an Image</Text>
        )}
        {selectedFrame && renderFrame(frames.find(frame => frame.id === selectedFrame))}
      </TouchableOpacity>

      {/* Frame Selection */}
      <Text style={styles.label}>Select Frame</Text>
      <Picker
        selectedValue={selectedFrame}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedFrame(itemValue)}
      >
        <Picker.Item label="No Frame" value={null} />
        {frames.map(frame => (
          <Picker.Item key={frame.id} label={frame.id} value={frame.id} />
        ))}
      </Picker>

      {/* Message Input */}
      <Text style={styles.label}>Message</Text>
      <CustomTextInput
        placeholder="Contact Name"
        value={contactName}
        onChangeText={setContactName}
      />

      {/* Group Dropdown */}
      <Text style={styles.label}>Select Group</Text>
      <DropDownPicker
        open={openGroup}
        value={group}
        items={itemsGroup}
        setOpen={setOpenGroup}
        setValue={setGroup}
        setItems={setItemsGroup}
        placeholder="Select Group"
        containerStyle={{ marginBottom: 20 }}
        style={styles.dropdown}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
      />

      {/* Language Dropdown */}
      <Text style={styles.label}>Select Language</Text>
      <DropDownPicker
        open={openLanguage}
        value={language}
        items={itemsLanguage}
        setOpen={setOpenLanguage}
        setValue={setLanguage}
        setItems={setItemsLanguage}
        placeholder="Select Language"
        containerStyle={{ marginBottom: 20 }}
        style={styles.dropdown}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  frameOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
  },
});

export default CreateScheduleMsg;
