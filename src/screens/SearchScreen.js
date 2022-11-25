import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen({ navigation }) {
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
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
      <View style={styles.ViewStyle}>
        {errorMessage.length > 1 ? (
          <Text style={styles.errorStyle}>{errorMessage}</Text>
        ) : (
          <View></View>
        )}
      </View>
      <ScrollView>
        <ResultsList
          header='Cost Effective'
          results={filterResultsByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          header='Bit Pricier..'
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          header='Big Spender!'
          results={filterResultsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
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
  backgroundStyle: {
    backgroundColor: "lightblue",
    flex: 1,
  },
});
