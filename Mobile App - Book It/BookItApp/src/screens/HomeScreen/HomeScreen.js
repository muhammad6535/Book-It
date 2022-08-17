import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import { useNavigation } from "@react-navigation/native";
import { Searchbar, Text as TextPaper } from "react-native-paper";
import axios from "axios";
import apiPath from "../../hooks/apiPath";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  // Get all Organizations from the DB
  const [providers, setproviders] = useState([]);
  useEffect(() => {
    getData().then((organizations) => {
      setproviders(organizations);
    });
  }, []);

  async function getData() {
    try {
      let { data } = await axios.get(apiPath + "/Organization/Organizations");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

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
        {providers.map((item, index) => (
          <OrganizationCard
            key={index}
            style={styles.item}
            data={item}
          />
        ))}
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
