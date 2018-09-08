import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class button3 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 56,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Icon
          style={styles.icon}
          name="share-variant"
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(237,198,163,1)",
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    opacity: 1
  },
  icon: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 24
  }
});
