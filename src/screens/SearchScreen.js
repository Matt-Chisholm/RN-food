import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const onTermSubmit = () => {
    searchApi(term);
  };

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      console.log(response.data.businesses);
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
      <Text>We have successfully found {results.length} results!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
