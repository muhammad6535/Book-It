import React, { useState } from "react";
import { Text, Button, TouchableOpacity, View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

const DatePicker = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(Moment(date).format("dddd : D-MM-YYYY"));
    hideDatePicker();
  };

  return (
    <TouchableOpacity onPress={showDatePicker} style={styles.root}>
      <Text style={styles.text}>{selectedDate}</Text>
      {/* <Button title={props.title} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    // backgroundColor:'#38577B',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderColor: "#38577B",
    borderWidth:1,
  },
  text: {
    fontWeight: "bold",
    color: '#38577B',
  },
});

export default DatePicker;
