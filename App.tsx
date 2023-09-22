/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

//import routes
import Routes from "./app/src/routes/routes";

//import helper
import { Colors } from "./app/src/helper/colors";

//import redux
import configureStore from "./app/src/redux/store";

const App = () => {
  const store = configureStore();

  return (
    <>
      {/* <Provider store={store}> */}
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        barStyle={"dark-content"}
      />
      <Routes />
      {/* </Provider> */}
    </>
  );
};

export default App;
