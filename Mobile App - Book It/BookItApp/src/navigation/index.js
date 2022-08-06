import { View, Text } from "react-native";
import React from "react";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen/ForgetPasswordScreen";
import NewPasswrodScreen from "../screens/NewPasswrodScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Apponitment from "../screens/AppointmentScreen/AppointmentScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="NewPassword"
          component={NewPasswrodScreen}
        ></Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Appointment" component={Apponitment}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
