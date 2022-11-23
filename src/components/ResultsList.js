import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ResultsList({ header, results }) {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
