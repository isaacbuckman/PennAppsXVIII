import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class checkbox extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 40,
    width: 40,
    defaultHeight: "auto",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Icon
          style={[
            styles.checkIcon,
            {
              color: this.props.checked ? "#007AFF" : "#ccc"
            }
          ]}
          name={
            this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"
          }
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 100
  },
  checkIcon: {
    fontSize: 28
  }
});
