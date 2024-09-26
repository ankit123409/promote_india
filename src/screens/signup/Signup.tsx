// Signup.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../common/Customtextinput';
import OtpInputs from 'react-native-otp-inputs';
import CustomButton from '../../common/CustomButton';
import { push } from '../../navigation/RootNavigation';

const { width } = Dimensions.get('window');

const Signup = () => {
  return (
    <View style={styles.container}>
      {/* Header Background Circles */}
      <View style={styles.header}>
        <Image
          resizeMode="cover"
          source={require('../Images/Ellipse0x.png')}
          style={styles.imageLeft}
        />
        <Image
          resizeMode="cover"
          source={require('../Images/Ellipse1x.png')}
          style={styles.imageRight}
        />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Sign Up</Text>

        {/* Full Name Input */}
        <Text style={styles.label}>Full Name</Text>
        <CustomTextInput
          placeholder="Enter your full name"
          style={styles.input}
        />

        {/* Mobile Number Input */}
        <Text style={styles.label}>Mobile Number</Text>
        <CustomTextInput
          placeholder="Enter your mobile number"
          style={styles.input}
          keyboardType="phone-pad"
        />

        {/* OTP Input */}
        <Text style={styles.label}>OTP</Text>
        <OtpInputs
          numberOfInputs={4}
          style={styles.otpContainer}
          inputStyles={styles.otpInput}
        />

        {/* PIN Input */}
        <Text style={styles.label}>Pin</Text>
        <OtpInputs
          numberOfInputs={4}
          style={styles.otpContainer}
          inputStyles={styles.otpInput}
        />

        {/* Confirm PIN Input */}
        <Text style={styles.label}>Confirm Pin</Text>
        <OtpInputs
          numberOfInputs={4}
          style={styles.otpContainer}
          inputStyles={styles.otpInput}
        />

        {/* Sign Up Button */}
        <CustomButton
          title="SIGN UP"
          onPress={() => {push("Login")}}
          style={styles.button}
          textStyle={styles.buttonText}
        />

        {/* Login Link */}
        <TouchableOpacity onPress={() => {push("Login")}}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'relative',
  },
  imageLeft: {
    // width: width * 0.35,
    // height: width * 0.20,
    position: 'absolute',
    top: -50,
    left: -50,
  },
  imageRight: {
    // width: width * 0.35,
    // height: width * 0.35,
    position: 'absolute',
    top: -50,
    right: -50,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333333',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#777777',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 16,
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default Signup;
