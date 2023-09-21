//import package
import React, {useEffect} from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';

// import helper
import {Colors} from '../../helper/colors';
import {Fonts} from '../../helper/Fonts';
import {Images} from '../../helper/images';

const Splash = props => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <ScrollView style={{flex: 1, backgroundColor: Colors.white}}>
        <View>
          <Text style={{fontFamily: Fonts.BOLD}}>JEgandjafkbdalfj</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Splash;
