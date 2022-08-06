import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("sign inaaa pressed");

    //validate user

    navigation.navigate("HomeScreen");
  };

  const onForgetPasswordPressed = () => {
    console.warn("forgot password pressed");
    navigation.navigate("ForgetPassword");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Up Pressed");
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          ></Image>
        <CustomInput
          placeholder={"User Name"}
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forget Password"
          onPress={onForgetPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
