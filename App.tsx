import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import RootStack from "./mobile/stacks/RootStack";
import MainStack from "./mobile/stacks/MainStack";

const LandingStack = createStackNavigator();

const auth: boolean = true;

export default function App() {
  return (
    <NavigationContainer>
      {auth ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
}
