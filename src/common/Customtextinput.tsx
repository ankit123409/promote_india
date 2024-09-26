// CustomTextInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  style,
  inputStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, inputStyle]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9', // Light background color
    borderWidth: 1,
    borderColor: '#ddd', // Light border color
    marginBottom: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#333', // Text color
  },
});

export default CustomTextInput;
