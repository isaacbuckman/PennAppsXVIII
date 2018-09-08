import React, { Component } from "react";
import { MapView } from "expo";
import { View, StyleSheet } from "react-native";

export default class materialMap1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 212,
    width: 147,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <MapView style={styles.MapView1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white"
  },
  MapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});
