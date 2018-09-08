import React, { Component } from "react";
import Button11 from "../symbols/button11";
import Button111 from "../symbols/button111";
import { View, StyleSheet, StatusBar } from "react-native";

export default class SignInPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <Button11 style={styles.owCBpb} />
        <Button111 style={styles.XjyuN1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  owCBpb: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 641,
    width: 362
  },
  XjyuN1: {
    top: 150.59,
    left: -150.01,
    position: "absolute",
    height: 36
  }
});
