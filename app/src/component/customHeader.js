//import package
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//import helper
import {Colors} from '../helper/colors';
import {Fonts} from '../helper/Fonts';

const CustomHeader = props => {
  return <View style={styles.contentContainer}></View>;
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});
export default CustomHeader;
