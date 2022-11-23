import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function SearchScreen() {
  const [term, setTerm] = useState("");

  const onTermSubmit = () => {
    console.log("term was submitted");
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
