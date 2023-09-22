//import package
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//import helper
import { Colors } from "../helper/colors";
import { Fonts } from "../helper/Fonts";
import { Images } from "../helper/images";

const CustomHeader = (props) => {
  const showRightIcon = () => {
    // if (props.rightIcon == "delete") {
    //   return (
    //     <TouchableOpacity>
    //       <Image source={Images.deleteIcon} style={{ width: 25, height: 25 }} />
    //     </TouchableOpacity>
    //   );
    // }
  };
  const showLeftIcon = () => {
    if (props.leftIcon == "arrow-left") {
      return <Images.backArrow />;
    }
  };
  return (
    <View style={styles.headerStyle}>
      <View style={styles.leftImgView}>
        <TouchableOpacity onPress={props.onBackPress}>
          {showLeftIcon()}
        </TouchableOpacity>
        <Text style={styles.largeFont}>{props.subTitle}</Text>
        <View style={styles.rightImgView}>
          <TouchableOpacity>{showRightIcon()}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    height: 55,
    justifyContent: "center",
  },
  largeFont: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
    fontSize: 22,
    flex: 1,
    textAlign: "center",
  },
  leftImgView: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  rightImgView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  InrView: {
    backgroundColor: Colors.white,
    width: 50,
    height: 30,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  InrTxt: {
    alignSelf: "center",
    color: Colors.black,
  },
});

export default CustomHeader;
