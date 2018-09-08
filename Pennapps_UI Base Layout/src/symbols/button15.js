import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class button15 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 36,
    width: 36,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Icon
          style={styles.buttonContent}
          name="menu"
          type="MaterialCommunityIcons"
        />
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
    borderRadius: 2
  },
  buttonContent: {
    color: "#3F51B5",
    fontSize: 24
  }
});
