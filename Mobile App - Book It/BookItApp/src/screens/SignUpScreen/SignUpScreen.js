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
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn("Register pressed");
    navigation.navigate("ConfirmEmail");
  };

  const onForgetPasswordPressed = () => {
    console.warn("forgot password pressed");
    navigation.navigate("ForgetPassword");
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms Of Use");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder={"User Name"}
          value={userName}
          setValue={setUserName}
        />
        <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder={"Repeat Password"}
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By Registering, you confirm that you accept our
          <Text onPress={onTermsOfUsePressed} style={styles.link}>
            {" "}
            Terms Of Use
          </Text>{" "}
          and{" "}
          <Text onPress={onPrivacyPolicyPressed} style={styles.link}>
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Forget Password"
          onPress={onForgetPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
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

export default SignUpScreen;
