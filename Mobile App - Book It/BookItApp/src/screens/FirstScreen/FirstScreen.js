import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function FirstPage({ navigation }) {
  const [userInput, setUserInput] = useState({ password: "" });

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Text style={styles.titleHP}>Book</Text>
        <Text style={styles.undertitle1}>make your appointment</Text>
        <Text style={styles.undertitle2}>Easier.</Text>
        {/* <Text>{JSON.stringify(userInput)}</Text> */}
        <Pressable
          style={styles.btnStyle1}
          title="login"
          onPress={() =>
            navigation.navigate("HomeScreen")
          }
        >
          <Text style={styles.textStyle}>Book It </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    position: "relative",
    margin: 100,
    // padding:85,
  },
  pageContainer: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    width: 414,
    height: 736,
  },
  btnStyle1: {
    marginTop: 10,
    borderRadius: 10,
    width: 350,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
    // borderWidth:1,
    // shadowColor: "#1877F2",
    // shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#1877F2", // invisible color
  },
  btnStyle2: {
    marginTop: 20,
    // borderRadius:62.5,
    // width:300,
    // height:50,
    // alignItems:'center',
    // justifyContent:'center',
    // marginBottom: 10,
    // borderWidth:1,
    // backgroundColor:'#246EE9',
    borderRadius: 10,
    width: 350,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(24, 119, 242, 0.3)",
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  textInput: {
    // backgroundColor:'white',
    // width:300,
    // height:60,
    // borderRadius:100,
    // textAlign:'center',
    // padding:10,
    // borderColor:'black',
    // borderWidth:2,
  },
  titleHP: {
    color: "#1877F2",
    fontSize: 65,
    fontWeight: "bold",
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 20,
  },
  undertitle1: {
    fontSize: 20,
    paddingLeft: 5,
    width: 250,
    // marginBottom:10,
    // marginRight:270,
    // marginEnd:35,
    color: "black",
  },
  undertitle2: {
    fontSize: 55,
    marginLeft: 80,
    marginTop: 15,
    color: "black",
    fontWeight: "bold",
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    // textShadowOffset: { width: -1, height: 10 },
    // textShadowRadius: 20,
  },
});
