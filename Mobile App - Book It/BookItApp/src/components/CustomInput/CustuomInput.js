import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const custuomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#38577B",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop:3,
    marginVertical: 5,
    height: 40,
  },

  inputStyle: {},
});
export default custuomInput;
