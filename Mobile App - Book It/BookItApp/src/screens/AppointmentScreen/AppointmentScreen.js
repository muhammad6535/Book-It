import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
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

  let branchId = 1;
  let orgId = 1;

  useEffect(async (url) => {
    let { data } = await axios.get(apiPath + url + orgId);
    setBranches(
      data.map((b, index) => {
        return { label: b.name, value: b.id };
      })
    );
  }, []);

  const [branches, setBranches] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [workingHours, setWorkingHours] = useState([]);
  const [workDay, setWorkDay] = useState("");

  useEffect(async () => {
    //branches
    let { data: brnchs } = await axios.get(
      apiPath + "/Branch/Branches?orgId=" + orgId
    );
    setBranches(
      brnchs.map((b, index) => {
        return { label: b.name, value: b.id };
      })
    );

    //services
    let { data: services } = await axios.get(
      apiPath + "/ServiceType/ServiceTypes?branchId=" + branchId
    );
    setServiceTypes(
      services.map((s, index) => {
        return { label: s.name, value: s.id };
      })
    );

    //WorkHours
    let { data: workingHours } = await axios.get(
      apiPath +
        "/WorkHours/WorkHoursByDate?branchId=" +
        branchId +
        "&dayWeek=" +
        workDay
    );
    setWorkingHours(
      workingHours.map((b, index) => {
        return { label: b.name, value: b.id };
      })
    );
  }, [branchId, orgId, workDay]);

  const navigation = useNavigation();
  const onRegisterPressed = () => {
    navigation.navigate("Confirmation", { phone: phoneNumber });
  };

  const availableAppointments = [
    { label: "15:30", value: "1" },
    { label: "15:45", value: "2" },
    { label: "16:00", value: "3" },
    { label: "16:15", value: "4" },
    { label: "16:30", value: "5" },
    { label: "16:45", value: "6" },
    { label: "17:00", value: "7" },
  ];

  function getCountValue(workDay) {
    let dayNames = {
      Sunday: "1",
      Monday: "2",
      Tuesday: "3",
      Wednesday: "4",
      Thursday: "5",
      Friday: "6",
      Saturday: "7",
    };
    let dayNum = dayNames[workDay.split(':')[0].trim()];
    console.log(aa);
    setWorkDay(workDay);
  }

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
        <DatePicker title="Choose Date" getCountValue={getCountValue} />
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
