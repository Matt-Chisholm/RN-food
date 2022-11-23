import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder='Search' />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 30,
    borderRadius: 5,
    marginHorizontal: 30,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
