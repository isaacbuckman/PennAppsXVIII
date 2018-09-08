import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <View style={styles.rect} />
        <Image
          source={require("../assets/Packk_logo3.png")}
          style={styles.image}
        />
        <Center vertical>
          <Text style={styles.text}>W O L F P A C K K</Text>
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
  rect: {
    height: 641.49,
    width: 360,

    backgroundColor: "rgba(44,41,41,1)",
    opacity: 1
  },
  statusBar: {},
  image: {
    height: 150.75,
    width: 134.39
  },
  text: {
    height: 27,
    width: 277,
    backgroundColor: "transparent",
    fontFamily: "TsukuARdGothic-Bold",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  }
});
