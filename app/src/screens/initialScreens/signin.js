//import package
import React from "react";
import {
  StatusBar,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import CustomButton from "../../component/customButton";
import CustomHeader from "../../component/customHeader";

//import helper
import { Images } from "../../helper/images";
import { Colors } from "../../helper/colors";

const SignIn = (props) => {
  return (
    <>
      <CustomHeader
        onBackPress={() => {
          props.navigation.goBack();
        }}
        subTitleVisibility={true}
        leftIcon="arrow-left"
        subTitleColor={Colors.black}
        subTitle={"Signin"}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
