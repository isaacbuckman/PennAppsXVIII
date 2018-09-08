import React, { Component } from "react";
import Checkbox from "../symbols/checkbox";
import Segment3 from "../symbols/segment3";
import { Center } from "@builderx/utils";
import { View, StyleSheet } from "react-native";

export default class Confirmation extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.W2LVpe} />
        <Checkbox style={styles.jXBd8I} />
        <Center horizontal>
          <Segment3 style={styles.segment3} />
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  W2LVpe: {
    height: 1,
    width: 1,
    top: -2.39,
    left: -3.85,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)"
  },
  jXBd8I: {
    top: 396.21,
    left: 84.56,
    position: "absolute"
  },
  segment3: {
    top: 117,
    position: "absolute",
    height: 50,
    width: 336
  }
});
