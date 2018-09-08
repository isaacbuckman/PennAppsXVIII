import React, { Component } from "react";
import { Center } from "@builderx/utils";
import FixedLabel from "../symbols/fixedLabel";
import RightIconTextbox from "../symbols/rightIconTextbox";
import Button11 from "../symbols/button11";
import { View, StyleSheet, Text, StatusBar } from "react-native";

export default class AdminPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <Center horizontal>
          <Text style={styles.d6zjmN}>S I G N   -   I N</Text>
        </Center>
        <Center horizontal>
          <FixedLabel style={styles.h1FknU} />
        </Center>
        <Center horizontal>
          <Text style={styles.text}>A D M I N</Text>
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  d6zjmN: {
    top: 136.28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "TsukuARdGothic-Bold",
    color: "rgba(255,255,255,1)"
  },
  h1FknU: {
    top: 204.5,
    width: 246,
    position: "absolute"
  },
  text: {
    top: 136.28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "TsukuARdGothic-Bold",
    color: "rgba(255,255,255,1)"
  },
  fixedLabel: {
    top: 204.5,
    width: 246,
    position: "absolute"
  },
  rightIconTextbox: {
    top: 275.02,
    width: 246,
    position: "absolute"
  },
  button11: {
    top: "59.84%",
    width: 98,
    height: "6.88%",
    position: "absolute"
  },
  statusBar: {}
});
