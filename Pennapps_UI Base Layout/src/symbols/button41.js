import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button41 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 36,
    width: 100,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.buttonContent}>BUTTON</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  buttonContent: {
    fontSize: 14,
    fontWeight: "200",
    fontFamily: "Roboto",
    color: "#3F51B5"
  }
});
