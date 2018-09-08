import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TextInput, StyleSheet } from "react-native";

export default class disabledTextbox extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 43,
    width: 360,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Disabled Textbox"
          editable={false}
        />
        <Icon
          style={styles.iconStyle}
          name="information-outline"
          type="MaterialCommunityIcons"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    alignSelf: "flex-start",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  },
  iconStyle: {
    opacity: 0.7,
    paddingRight: 8,
    color: "#384850",
    fontSize: 24
  }
});
