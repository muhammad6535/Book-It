import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropdownList from "../../components/DropdownList/DropdownList";


const AppointmentScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  };

  const branches = [
    { label: "Tel Aviv", value: "1" },
    { label: "Haifa", value: "2" },
    { label: "Afula", value: "3" },
  ];

  const serviceTypes = [
    { label: "Type A", value: "1" },
    { label: "Type B", value: "2" },
    { label: "Type C", value: "3" },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Fill Your Information</Text>
        <CustomInput
          placeholder={"Full Name"}
          value={fullName}
          setValue={setFullName}
        />
        <CustomInput
          placeholder={"Phone Number"}
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
        <DropdownList textTitle="Select Branch" data={branches} />
        <DropdownList textTitle="Select Service Type" data={serviceTypes} />


        <CustomButton text="Submit" onPress={onRegisterPressed} />

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

export default AppointmentScreen;
