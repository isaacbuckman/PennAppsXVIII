import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button61 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 44,
    width: 100,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.buttonContent}>GUEST</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(212,133,120,1)",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
    opacity: 1
  },
  buttonContent: {
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000"
  }
});
