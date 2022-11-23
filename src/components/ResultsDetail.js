import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ResultsDetail({ result }) {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.resultStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  resultStyle: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  viewStyle: {
    marginHorizontal: 15,
  },
});
