import React from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <AntDesign
        style={styles.searchBarIcon}
        name="search1"
        size={24}
        color="black"
      />
      <TextInput
        style={styles.searchBarPlaceHolder}
        placeholder="Market veya ürün ara"
        autoCapitalize="none"
        onSubmitEditing={() => {
          Alert.alert("Arama tetiklendi");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#DCDCDC",
    height: 40,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  searchBarIcon: {
    marginLeft: 10,
  },
  searchBarPlaceHolder: {
    marginLeft: 10,
    fontSize: 20,
  },
});
