import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ header, results }) {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 15,
  },
  resultStyle: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});
