import React from 'react';
import { View, StyleSheet } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

const OtpInput = (props:any) => {
  const handleOtpChange = (otp) => {
    console.log(otp); // Handle OTP input
  };

  return (
    <View style={styles.container}>
      <OtpInputs
        handleChange={handleOtpChange}
        numberOfInputs={4} // Specify the number of OTP inputs needed
        style={styles.otpContainer}
        inputStyles={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width:60,
    height: 60,
    // backgroundColor:"red",
    margin:7,

    textAlign: 'center',
  },
});

export default OtpInput;
