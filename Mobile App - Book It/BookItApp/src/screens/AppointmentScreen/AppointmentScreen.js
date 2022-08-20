import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DropdownList from "../../components/DropdownList/DropdownList";
import DatePicker from "../../components/DatePicker/DatePicker";
import axios from "axios";
import apiPath from "../../hooks/apiPath";
import moment from "moment";

const AppointmentScreen = (props) => {
  const orgId = props.route.params.orgId;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
  const [workHours, setWorkHours] = useState("");
  const [workDay, setWorkDay] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [workFrom, setWorkFrom] = useState("");
  const [workTo, setWorkTo] = useState("");
  const [breakFrom, setbreakFrom] = useState("");
  const [breakTo, setBreakTo] = useState("");
  const [branchId, setbranchId] = useState("");

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
        return { label: s.name, value: s.id, item: s };
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
    setWorkHours(workingHours);
    parseAppointments();
  }, [branchId, orgId, workDay, selectedService]);

  const navigation = useNavigation();
  const onRegisterPressed = () => {
    navigation.navigate("Confirmation", { phone: phoneNumber });
  };

  function getDayNum(workDay) {
    let dayNames = {
      Sunday: "1",
      Monday: "2",
      Tuesday: "3",
      Wednesday: "4",
      Thursday: "5",
      Friday: "6",
      Saturday: "7",
    };
    let dayNum = dayNames[workDay.split(":")[0].trim()];
    setWorkDay(dayNum);
  }

  function getSelectedItem(selectedService) {
    setSelectedService(selectedService);
  }

  const parseAppointments = () => {
    setWorkFrom(
      workHours[0] && new moment("2022-06-24T" + workHours[0].workFrom)
    );
    setWorkTo(workHours[0] && new moment("2022-06-24T" + workHours[0].workTo));
    setbreakFrom(
      workHours[0] && new moment("2022-06-24T" + workHours[0].breakFrom)
    );
    setBreakTo(
      workHours[0] && new moment("2022-06-24T" + workHours[0].breakTo)
    );

    var appointments = [];
    for (
      let d = workFrom;
      d < workTo;
      d.add(selectedService.item.timeAvg, "m")
    ) {
      if (!(d >= breakFrom && d < breakTo)) {
        appointments.push({ label: d.format("HH:mm"), value: d });
      }
    }
    setAvailableAppointments(appointments);
  };
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
        <DropdownList
          textTitle="Select Branch"
          data={branches}
          getSelectedBranch={setbranchId}
        />
        <DropdownList
          textTitle="Select Service Type"
          data={serviceTypes}
          getSelectedItem={getSelectedItem}
        />
        <DatePicker title="Choose Date" getCountValue={getDayNum} />
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
