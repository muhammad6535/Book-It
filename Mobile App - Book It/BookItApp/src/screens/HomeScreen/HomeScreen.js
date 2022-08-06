import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import { useNavigation } from "@react-navigation/native";
import {
  Searchbar,
  Button,
  Card,
  Text as TextPaper,
  Title,
  Paragraph,
} from "react-native-paper";
// import Logo from "../../../assets/images/logo.png";
// import CustomInput from "../../components/CustomInput";
// import CustomButton from "../../components/CustomButton";
// import SocialSignInButtons from "../../components/SocialSignInButtons";
// import * as React from 'react';

const HomeScreen = () => {
  const navigation = useNavigation();
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const onOrgPressed = () => {
    navigation.navigate("Appointment");
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <TextPaper variant="displayLarge" style={styles.Title}>
        Choose Organization
      </TextPaper>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View style={styles.container}>
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
        <OrganizationCard style={styles.item} onPress={onOrgPressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  Title: {
    fontSize: 50,
  },
  searchBar: {
    marginTop: 30,
  },
});

export default HomeScreen;
