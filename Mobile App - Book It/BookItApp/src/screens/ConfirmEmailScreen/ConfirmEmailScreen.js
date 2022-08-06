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

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn("Confirm Code pressed");

    navigation.navigate('HomeScreen');
  };

  const onBackToSignUpPressed = () => {
    console.warn("back to sign in Pressed");
    navigation.navigate('SignIn');
  };

  const onResendCodePressed = () => {
    console.warn("Resend Code Pressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder={"Enter your confirmation code"}
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />
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

export default ConfirmEmailScreen;
