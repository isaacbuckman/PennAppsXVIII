import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button131 extends Component {
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
        <Text style={styles.buttonContent}>CREATE NEW ACCOUNT</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(212,133,120,1)",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    opacity: 1
  },
  buttonContent: {
    fontSize: 12,
    fontWeight: "200",
    color: "#fff",
    fontFamily: "TsukuARdGothic-Bold"
  }
});
