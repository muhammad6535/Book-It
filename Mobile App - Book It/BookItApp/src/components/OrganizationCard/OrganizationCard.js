import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const OrganizationCard = (props) => {
  const onOrgPressed = () => {
    navigation.navigate("Appointment");
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onOrgPressed} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <Text style={styles.orgText} variant="titleMedium">
        {props.data.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17,
  },
  tinyLogo: {
    borderRadius: 20,
    width: "80%",
    height: 100,
    alignSelf: "center",
  },

  orgText: {
    fontWeight: "bold",
    fontSize: 16,
    width: "auto",
    alignItems: "center",
    alignSelf: "center",
  },
  imgContainer: {
    borderRadius: 20,
    width: "100%",
    height: 140,
    backgroundColor: "#92A7BF",
    justifyContent: "center",
  },
});
export default OrganizationCard;
