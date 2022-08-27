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
  const [branches, setBranches] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [workHours, setWorkHours] = useState("");
  const [workDay, setWorkDay] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [availableAppointments, setAvailableAppointments] = useState("");
  const [branchId, setBranchId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [bookedAppointments, setBookedAppointments] = useState("");
  const [timeAvg, setTimeAvg] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState("");

  useEffect(async () => {
    //branches
    let { data: brnchs } = await callApi(
      apiPath + "/Branch/Branches?orgId=" + orgId
    );
    setBranches(
      brnchs.map((b, index) => {
        return { label: b.name, value: b.id };
      })
    );
  }, [orgId]);

  useEffect(async () => {
    //services
    let { data: services } = await callApi(
      apiPath + "/ServiceType/ServiceTypes?branchId=" + branchId
    );
    setServiceTypes(
      services.map((s, index) => {
        return { label: s.name, value: s.id, item: s };
      })
    );
  }, [branchId]);

  useEffect(async () => {
    //WorkHours
    let { data: workingHourss } = await callApi(
      apiPath +
        "/WorkHours/WorkHoursByDate?branchId=" +
        branchId +
        "&dayWeek=" +
        workDay
    );
    setWorkHours(workingHourss);
  }, [branchId, workDay]);

  useEffect(() => {
    parseAppointments(workHours, bookedAppointments);
  }, [workHours, bookedAppointments,workDay]);

  useEffect(async () => {
    //Booked Appointments
    let { data: bookedApps } = await callApi(
      apiPath +
        "/Appointment/BookedAppiontmentsByDate?BranchId=" +
        branchId +
        "&date=" +
        selectedDate +
        "&serviceId=" +
        selectedService?.item?.id
    );
    setBookedAppointments(bookedApps);
  }, [selectedService, selectedDate, branchId]);

  const callApi = async (api) => {
    try {
      return axios.get(api);
    } catch (error) {}
  };

  const navigation = useNavigation();
  const onRegisterPressed = () => {
    let flag = 1;
    if (fullName.length <= 3) {
      console.log("Error! put a valid name");
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      flag = 0;
      console.log("Error! please enter a valid email");
    }
    if (phoneNumber.length != 10) {
      flag = 0;
      console.log("Error! please enter a valid phone number - 10 numbers");
    }
    if (branchId <= 0) {
      flag = 0;
      console.log("Error! please choose Branch");
    }
    if (selectedService.length <= 0) {
      flag = 0;
      console.log("Error! please choose Service");
    }
    if (selectedDate.length <= 0) {
      flag = 0;
      console.log("Error! please choose Date");
    }
    if (selectedAppointment.length <= 0) {
      flag = 0;
      console.log("Error! please choose Appointment");
    }
    if (flag == 1) {
      insertAppointment();
      navigation.navigate("Confirmation", { phone: phoneNumber });
    }
  };

  const insertAppointment = async () => {
    try {
      let fixedDateFormat = new moment(selectedAppointment["value"]).format(
        "MM-D-YYYY HH:mm"
      );
      // console.log(fullName + " " + email  + " " +phoneNumber + " "+ branchId + " "+ selectedService.item.id + " " +fixedDateFormat
      // );
      const response = await axios.post(
        apiPath +
          "/Appointment/InsertAppointment?name=" +
          fullName +
          "&email=" +
          email +
          "&phone=" +
          phoneNumber +
          "&branchId=" +
          branchId +
          "&serviceId=" +
          selectedService.item.id +
          "&date=" +
          fixedDateFormat
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
    setTimeAvg(selectedService && selectedService.item.timeAvg);
  }

  async function parseAppointments(workingHourss, bookedApps) {
    var reversedDate = selectedDate;
    reversedDate = reversedDate.split("-");
    let day = reversedDate[1];
    let month = reversedDate[0];
    let year = reversedDate[2];
    var fixedFormatDate = year + "-" + month + "-" + day;
    var wFrom = new moment(fixedFormatDate + "T" + workingHourss[0]?.workFrom);
    var wTo = new moment(fixedFormatDate + "T" + workingHourss[0]?.workTo);
    var bFrom = new moment(fixedFormatDate + "T" + workingHourss[0]?.breakFrom);
    var bTo = new moment(fixedFormatDate + "T" + workingHourss[0]?.breakTo);
    var appointments = [];
    bookedApps = bookedApps?.map((app) => new moment(app) + "");

    for (let d = wFrom; d < wTo; d.add(timeAvg, "m")) {
      if (!(d >= bFrom && d < bTo)) {
        appointments.push({ label: d.format("HH:mm"), value: new moment(d) });
      }
    }

    appointments = appointments.filter((app) => {
      return !bookedApps.includes(app.value + "");
    });
    // if (appointments.length > 0)
    console.log(appointments);
    setAvailableAppointments(appointments);
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
        <DropdownList
          textTitle="Select Branch"
          data={branches}
          getSelectedBranch={setBranchId}
        />
        <DropdownList
          textTitle="Select Service Type"
          data={serviceTypes}
          getSelectedItem={getSelectedItem}
        />
        <DatePicker
          title="Choose Date"
          getCountValue={getDayNum}
          getSelectedDate={setSelectedDate}
          maxDate={moment().toDate()}
        />
        <DropdownList
          textTitle="Select Appointment"
          data={availableAppointments}
          selectedAppointment={setSelectedAppointment}
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
