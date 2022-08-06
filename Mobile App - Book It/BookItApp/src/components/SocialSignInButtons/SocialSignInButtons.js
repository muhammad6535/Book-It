import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
  const onSignInFacebookPressed = () => {
    console.warn("Sign In With Facebook Pressed");
  };

  const onSignInGooglePressed = () => {
    console.warn("Sign In With Google Pressed");
  };

  const onSignInApplePressed = () => {
    console.warn("Sign In With Apple Pressed");
  };

  return (
    <>
      <CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In With Google"
        onPress={onSignInGooglePressed}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign In With Apple"
        onPress={onSignInApplePressed}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
