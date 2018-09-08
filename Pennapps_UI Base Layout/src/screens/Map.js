import React, { Component } from "react";
import MaterialMap1 from "../symbols/materialMap1";
import { Center } from "@builderx/utils";
import SearchBar4 from "../symbols/searchBar4";
import Button7 from "../symbols/button7";
import Button3 from "../symbols/button3";
import { View, StyleSheet } from "react-native";

export default class Map extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <MaterialMap1 style={styles.materialMap1} />
        <SearchBar4 style={styles.searchBar4} />
        <Center horizontal>
          <Button7 style={styles.button7} />
        </Center>
        <Button3 style={styles.button3} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  materialMap1: {
    position: "absolute",
    height: 500,
    width: 361,
    left: "0%",
    top: "15.63%"
  },
  rect: {
    top: 0,

    width: 361,
    height: 740,
    position: "absolute",
    backgroundColor: "rgba(44,41,41,1)",
    opacity: 1,
    left: "-0.28%"
  },
  searchBar4: {
    top: 73.12,
    position: "absolute",
    height: 42.88,
    width: 359.96,
    left: "0%"
  },
  toolbar: {
    position: "absolute",
    height: 38.57,
    width: 359.79,
    left: "0%",
    top: "93.82%"
  },
  button7: {
    top: 560.07,
    position: "absolute",
    height: 28,
    width: 90
  },
  button3: {
    top: 546,
    left: 302.64,
    position: "absolute",
    height: 42,
    width: 42
  }
});
