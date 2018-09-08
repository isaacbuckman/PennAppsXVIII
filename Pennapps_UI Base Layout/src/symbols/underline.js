import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class underline extends Component {
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
          placeholder="Placeholder"
          editable={false}
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
  }
});
