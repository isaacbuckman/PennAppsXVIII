import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default class rightIconTextbox extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 43,
    width: 375,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput style={styles.inputStyle} placeholder="Label" />
        <Icon
          style={styles.iconStyle}
          name="eye"
          type="MaterialCommunityIcons"
        />
        <Center vertical>
          <Text style={styles.text}>password</Text>
        </Center>
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
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  },
  iconStyle: {
    paddingRight: 8,
    color: "#616161",
    fontSize: 24
  },
  text: {
    left: 16,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "TsukuARdGothic-Bold",
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 16
  }
});
