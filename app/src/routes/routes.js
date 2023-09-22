//import package
import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//import screens
import Splash from "../screens/initialScreens/Splash";
import SignIn from "../screens/initialScreens/signin";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Splash"}
        >
          <Stack.Screen name={"Splash"} component={Splash} />
          <Stack.Screen name={"SignIn"} component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
