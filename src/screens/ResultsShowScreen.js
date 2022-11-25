import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  viewStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
