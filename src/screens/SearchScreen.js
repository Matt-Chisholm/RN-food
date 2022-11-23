import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");

  const onTermSubmit = () => {
    searchApi(term);
  };

  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
      <View style={styles.ViewStyle}>
        {errorMessage.length > 1 ? (
          <Text style={styles.errorStyle}>{errorMessage}</Text>
        ) : (
          <Text style={styles.textStyle}>
            We have successfully found {results.length} results!
          </Text>
        )}
      </View>
      <ResultsList
        header='Cost Effective'
        results={filterResultsByPrice("$")}
      />
      <ResultsList
        header='Bit Pricier..'
        results={filterResultsByPrice("$$")}
      />
      <ResultsList
        header='Big Spender!'
        results={filterResultsByPrice("$$$")}
      />
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
