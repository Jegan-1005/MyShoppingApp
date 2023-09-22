import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const screen = Dimensions.get("screen");

const Splash = () => {
  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={["#f76039", "#f55048"]}
          start={{ x: 0.5, y: 0.1 }}
          end={{ x: 0.5, y: 1.5 }}
          style={styles.banner}
        >
          {/* <View style={styles.banner}></View> */}
        </LinearGradient>
        <View>
          <Text style={{ color: "red" }}>adfjlh</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
  banner: {
    // backgroundColor: "#BF3EFF",
    height: screen.width * 2,
    width: screen.width * 2,
    borderWidth: 5,
    borderColor: "#ffe3d7",
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
