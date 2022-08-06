import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswrodScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
      console.warn("Send pressed");
      navigation.navigate('HomeScreen');
  };

  const OnSignInPressed = () => {
    console.warn("Back To Sign In Pressed");
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder={"Code"} value={code} setValue={setCode} />
        <CustomInput
          placeholder={"Enter your new password"}
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSendPressed} />
        <CustomButton
          text="Back to sign in"
          onPress={OnSignInPressed}
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

export default NewPasswrodScreen;
