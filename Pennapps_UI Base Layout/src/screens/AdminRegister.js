import React, { Component } from "react";
import { Center } from "@builderx/utils";
import FixedLabel from "../symbols/fixedLabel";
import RightIconTextbox from "../symbols/rightIconTextbox";
import Button11 from "../symbols/button11";
import Button13 from "../symbols/button13";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default class AdminRegister extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          style={styles.statusBar}
          hidden={true}
        />
        <View style={styles.rect} />
        <Center horizontal>
          <Text style={styles.text}>A D M I N   R E G I S T R A T I O N</Text>
        </Center>
        <Center horizontal>
          <FixedLabel style={styles.fixedLabel} />
        </Center>
        <Center horizontal>
          <RightIconTextbox style={styles.rightIconTextbox} />
        </Center>
        <Center horizontal>
          <Button11 style={styles.button11} />
        </Center>
        <Center horizontal>
          <Button13 style={styles.button13} />
        </Center>
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
  rect: {
    top: 0,
    left: 0,
    width: 360,
    height: 640,
    position: "absolute",
    backgroundColor: "rgba(74,74,74,1)",
    opacity: 1
  },
  text: {
    top: 47,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "TsukuARdGothic-Bold",
    color: "rgba(255,255,255,1)"
  },
  fixedLabel: {
    top: 111.19,
    width: 246,
    position: "absolute"
  },
  rightIconTextbox: {
    top: 182.19,
    width: 246,
    position: "absolute"
  },
  button11: {
    top: "59.84%",
    width: 98,
    height: "6.88%",
    position: "absolute"
  },
  button13: {
    top: 284,

    position: "absolute",
    height: 36
  }
});
