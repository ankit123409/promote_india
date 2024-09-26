import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { reset } from '../../navigation/RootNavigation'; // Make sure this import path is correct

const Spalce = () => {
  useEffect(() => {
    // Using setTimeout inside useEffect to navigate after a delay
    const timer = setTimeout(() => {
      reset('Login'); // Reset navigation to the Login screen
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background image */}
      <Image
        source={require("../Images/appFreame.png")}
        style={styles.backgroundImage}
      />

      {/* Centered logo */}
      <Image
        source={require("../Images/applogo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Adjust as needed for your splash screen design
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust this if necessary for how the frame should scale
  },
  logo: {
    width: 150,  // Adjust width as per your logo design
    height: 150, // Adjust height as per your logo design
    resizeMode: 'contain', // Ensures the logo scales without distortion
  },
});

export default Spalce;
