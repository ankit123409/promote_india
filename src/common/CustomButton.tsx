// Button.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  disabled = false, 
  ...props 
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button, 
        style, 
        disabled && styles.disabledButton // Apply disabled styles if button is disabled
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Default button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  disabledButton: {
    backgroundColor: '#cccccc', // Color for disabled state
  },
  text: {
    color: '#fff', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
