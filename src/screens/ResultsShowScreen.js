import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam("id");

  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
