import { View, Text } from 'react-native'
import React from 'react';
import AppContainer from "./src/navigation/Index"
import 'react-native-gesture-handler';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const App = () => {
  // React.useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: "259435330552-ok99kn51p8pk5f19tepkd1mqefhignf2.apps.googleusercontent.com", 
  //     offlineAccess: true
  //   });
  // }, [])

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      //   alert('User cancelled the login flow !');
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   alert('Signin in progress');
      //   // operation (f.e. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   alert('Google play services not available or outdated !');
      //   // play services not available or outdated
      // } else {
      //   console.log(error)
      // }
    // }
  // }
  
  return (
    <AppContainer />
    // <View>
    //   <Text>App</Text>
    // </View>
  )
}

export default App;


function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
// import React, { useState, useRef } from 'react';
// import { View, Button, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

// const WebViewExample = () => {
//   const webViewRef = useRef(null);
//   const [responseData, setResponseData] = useState(null);

//   const handleWebViewMessage = (event) => {
//     // The data sent from WebView will be available here
//     const data = event.nativeEvent.data;
//     setResponseData(data);
//     console.log('Data from WebView:', data);
//   };

//   const injectJavaScriptToFetchData = () => {
//     if (webViewRef.current) {
//       // Inject JavaScript code into the WebView to fetch data
//       const script = `
//         (function() {
//           // Example of sending data from WebView back to React Native
//           window.ReactNativeWebView.postMessage(document.documentElement.innerHTML);
//         })();
//       `;
//       webViewRef.current.injectJavaScript(script);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         ref={webViewRef}
//         source={{ uri: 'https://backend.promotindia.in/api/login' }} // Replace with your actual URL
//         onMessage={handleWebViewMessage}
//         javaScriptEnabled={true}
//         injectedJavaScript={`
//           // Automatically execute JavaScript to get the response data
//           (function() {
//             window.ReactNativeWebView.postMessage(document.documentElement.innerHTML);
//           })();
//         `}
//       />
//       <Button title="Fetch Data" onPress={injectJavaScriptToFetchData} />
//       {responseData && (
//         <View style={{ padding: 10 }}>
//           <Text>Response Data:</Text>
//           <Text>{responseData}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default WebViewExample;




