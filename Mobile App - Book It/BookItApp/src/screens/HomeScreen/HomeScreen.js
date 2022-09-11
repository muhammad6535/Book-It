import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import { useNavigation } from "@react-navigation/native";
import { Searchbar, Text as TextPaper } from "react-native-paper";
import axios from "axios";
import apiPath from "../../hooks/apiPath";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [providers, setproviders] = useState([getData()]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setproviders([]);
  };

  // Get all Organizations from the DB
  async function getData() {
    let { data } = await axios.get(apiPath + "/Organization/Organizations");
    setproviders(data);
  }

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <TextPaper variant="displayLarge" style={styles.Title}>
        Choose Organization
      </TextPaper>
    
      <View style={styles.container}>
        {providers.map((item, index) => (
          <OrganizationCard key={index} style={styles.item} data={item} />
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
    alignItems:"center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: 'center'
  },
  searchBar: {
    marginTop: 30,
  },
});

export default HomeScreen;
