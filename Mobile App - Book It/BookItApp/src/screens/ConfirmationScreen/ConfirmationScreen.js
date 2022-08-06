import { View, StyleSheet, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ConfirmScreen = ({ route }) => {
  const { phone } = route.params;

  const navigation = useNavigation();

  // const onConfirmPressed = () => {
  //   console.warn("Confirm Code pressed");

  //   navigation.navigate('HomeScreen');
  // };

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Your Appointment Booked Successfully</Text>
      <Text style={styles.subtitle}>
        Confirmation Message Sent To: <Text style={styles.phone}>{phone}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38577B",
  },
  title: {
    marginLeft: 15,
    fontSize: 25,
    marginVertical: 2,
    textAlign: "center",

    color: "white",
  },
  subtitle: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  phone: {
    fontWeight: "bold",
  },
});

export default ConfirmScreen;
