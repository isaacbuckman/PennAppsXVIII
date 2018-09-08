import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class toolbar extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 44,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.buttonWrapper1}>
          <Icon style={styles.icon1} name="ios-navigate" type="Ionicons" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <Icon
            style={styles.icon2}
            name="television"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper3}>
          <Icon style={styles.icon3} name="ios-share-outline" type="Ionicons" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonWrapper4,
            {
              backgroundColor: "transparent"
            }
          ]}
        >
          <Icon
            style={styles.icon4}
            name={
              this.props.active ? (
                "ios-information-circle"
              ) : (
                "ios-information-circle-outline"
              )
            }
            type="Ionicons"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 8
  },
  buttonWrapper1: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper2: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper3: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon3: {
    backgroundColor: this.props.active
      ? "rgba(0, 122, 255,0.1)"
      : "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper4: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  }
});
