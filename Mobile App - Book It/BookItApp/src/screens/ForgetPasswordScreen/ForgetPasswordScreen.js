import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgetPasswordScreen = () => {
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn("Send pressed");
    navigation.navigate("NewPassword");
  };

  const onBackToSignUpPressed = () => {
    console.warn("back to sign in Pressed");
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder={"User Name"}
          value={userName}
          setValue={setUserName}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
        <CustomButton
          text="Back to sign in"
          onPress={onBackToSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  text: {
    marginVertical: 10,
    color: "gray",
  },

  link: {
    color: "orange",
  },
});

export default ForgetPasswordScreen;
