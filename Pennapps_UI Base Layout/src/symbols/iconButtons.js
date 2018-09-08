import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, StyleSheet } from "react-native";

export default class iconButtons extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center>
          <Icon name="home" style={styles.icon} type="MaterialCommunityIcons" />
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3f51b5",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  }
});
