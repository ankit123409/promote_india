// Login.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import CustomTextInput from '../../common/Customtextinput';
import OtpInputs from 'react-native-otp-inputs';
import CustomButton from '../../common/CustomButton';
import { push, reset } from '../../navigation/RootNavigation';
import { LoginApi } from './Loginapi';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const { width } = Dimensions.get('window');

const Login = () => {
  React.useEffect(()=> {
    GoogleSignin.configure({
      webClientId: "879224772691-ueh1v2r5nue62cdivaf1d8ktj3eqi5oq.apps.googleusercontent.com", 
    });
  }, [])
  // const GoogleSingUp = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     await GoogleSignin.signIn().then((result)=> { console.log(result) });
  //   } catch (error) {
  //     console.log("error",error);
      
  //   }
  // }

  // const GoogleSingUp = async()=> {
  //   try {
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
  //     const {idToken}  = await GoogleSignin.signIn();
  //     console.log("idToken",idToken);
      
      
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       alert('User cancelled the login flow !');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert('Signin in progress');
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert('Google play services not available or outdated !');
  //       // play services not available or outdated
  //     } else {
  //       console.log(error)
  //     }
  //   }
  // };

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    try{

      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      Alert.alert("he;looo  ")
      console.log("idToken",idToken);
    }catch(erroe){
      console.log("erroe",erroe);
      
    }
   

  
    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
  }
  
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log(isSignedIn);
  };
  const handlePress=()=>{
    LoginApi.login( (res:any) => {
      // navigate("BookingSucess")
      if(res){
        console.log("rseseses",res);
        
      }
    }, (error: any, error_code: number) => {
    
      console.log("error",error);
      
    })

  }
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
        <Text style={styles.title}>Login</Text>

        {/* Mobile Number Input */}
        <Text style={styles.label}>Mobile Number</Text>
        <CustomTextInput
          placeholder="Enter your mobile number"
          style={styles.input}
          keyboardType="phone-pad"
        />

        {/* PIN Input */}
        <Text style={styles.label}>Pin</Text>
        <OtpInputs
          numberOfInputs={4}
          style={styles.otpContainer}
          inputStyles={styles.otpInput}
        />

        {/* Login Button */}
        <CustomButton
          title="LOGIN"
          onPress={() => {
            reset("Schedule")
          }}
          style={styles.button}
          textStyle={styles.buttonText}
        />

        {/* Sign Up Link */}
        <TouchableOpacity onPress={onGoogleButtonPress}>
          <Text style={styles.signUpText}>
            Don’t have an account? <Text style={styles.signUpLink}>Sign up</Text>
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
    // height: width * 0.35,
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
    paddingVertical: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginBottom: 40,
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
    marginBottom: 40,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    textAlign: 'center',
    // fontSize: 18,
    // backgroundColor:"red",
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
  signUpText: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 16,
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default Login;


