import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import { useNavigation } from "@react-navigation/native";
import {
  Searchbar,
  Text as TextPaper,
} from "react-native-paper";

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
    fontSize: 40,
  },
  searchBar: {
    marginTop: 30,
  },
});

export default HomeScreen;
