import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ header, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", {
                  id: item.id,
                })
              }>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

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

export default withNavigation(ResultsList);
