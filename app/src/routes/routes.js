//import package
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//import screens
import Splash from '../screens/initialScreens/Splash';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Splash'}>
        <Stack.Screen name={'Splash'} component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
