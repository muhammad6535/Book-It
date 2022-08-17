import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DropdownList from "../../components/DropdownList/DropdownList";
import DatePicker from "../../components/DatePicker/DatePicker";
import axios from "axios";
import apiPath from "../../hooks/apiPath";

const AppointmentScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branches, setBranches] = useState([getBranches(1)]);
  async function getBranches(orgId) {
    let { data } = await axios.get(apiPath + "/Branch/Branches?orgId=" + orgId);
    setBranches(data);
  }

  const navigation = useNavigation();
  const onRegisterPressed = () => {
    navigation.navigate("Confirmation", { phone: phoneNumber });
  };

  // const branches = [
  //   { label: "Tel Aviv", value: "1" },
  //   { label: "Haifa", value: "2" },
  //   { label: "Afula", value: "3" },
  // ];

  let branchesArr = [];
  branches.map((b, index) => {
    branchesArr.push({ label: b.name, value: b.id });
  });
  const serviceTypes = [
    { label: "Type A", value: "1" },
    { label: "Type B", value: "2" },
    { label: "Type C", value: "3" },
  ];

  const availableAppointments = [
    { label: "15:30", value: "1" },
    { label: "15:45", value: "2" },
    { label: "16:00", value: "3" },
    { label: "16:15", value: "4" },
    { label: "16:30", value: "5" },
    { label: "16:45", value: "6" },
    { label: "17:00", value: "7" },
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

        <DropdownList textTitle="Select Branch" data={branchesArr} />
        <DropdownList textTitle="Select Service Type" data={serviceTypes} />
        <DatePicker title="Choose Date" />
        <DropdownList
          textTitle="Select Appointment"
          data={availableAppointments}
        />

        <CustomButton text="Submit" onPress={onRegisterPressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    marginTop: "5%",
    justifyContent: "center",
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
