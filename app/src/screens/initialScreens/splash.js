//import package
import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

// import helper
import { Colors } from "../../helper/colors";
import { Images } from "../../helper/images";

const screen = Dimensions.get("screen");

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("SignIn");
    }, 1000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.banner}></View> */}
        <View>
          <Images.logo width={150} height={150} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    backgroundColor: "#FD8700",
    height: screen.width * 2,
    width: screen.width * 2,
    borderWidth: 5,
    borderColor: "#FF4242",
    borderRadius: screen.width,
    position: "absolute",
    bottom: screen.height - screen.height * 0.7,
    alignItems: "center",
  },
});

export default Splash;

// //import package
// import React from 'react';
// import {
//   StatusBar,
//   View,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import CustomButton from '../../component/customButton';

// //import helper
// import {Images} from '../../helper/images';

// const Splash = props => {
//   return (
//     <>
//       <StatusBar barStyle={'light-content'} />

//       <View style={styles.container}>
//         {/* Background Image */}
//         <Image
//           source={Images.splashPng}
//           style={styles.backgroundImage}
//           resizeMode="cover"
//         />
//         <CustomButton
//           title={'Get started'}
//           onPress={() => {
//             props.navigation.navigate('SignIn');
//           }}
//         />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Splash;
