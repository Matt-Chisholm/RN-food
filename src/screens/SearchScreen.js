import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen() {
  const [term, setTerm] = useState("");

  const onTermSubmit = () => {
    searchApi(term);
  };

  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.ViewStyle}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
      {errorMessage.length > 1 ? (
        <Text style={styles.errorStyle}>{errorMessage}</Text>
      ) : (
        <Text style={styles.textStyle}>
          We have successfully found {results.length} results!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorStyle: {
    color: "red",
    fontSize: 20,
  },
  textStyle: {
    fontSize: 16,
    marginVertical: 10,
    color: "green",
  },
  ViewStyle: {
    display: "flex",
    alignItems: "center",
  },
});
