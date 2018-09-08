import React, { Component } from "react";
import Button6 from "../symbols/button6";
import { Center } from "@builderx/utils";
import Button61 from "../symbols/button61";
import Button62 from "../symbols/button62";
import { View, StyleSheet, Image } from "react-native";

export default class Account extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Button6 style={styles.button62} />
          <Button62 onPress={() => this.props.navigation.navigate("SignInPage")} style={styles.button622} />
          <Image
            source={require("../assets/Packk_logo3.png")}
            style={styles.image}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
  },
  rect: {
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(44,41,41,1)",
    opacity: 1
  },
  rect2: {
    top: 0,
    left: "0%",
    width: 360,
    height: 739,
    position: "absolute",
    backgroundColor: "rgba(44,41,41,1)",
    opacity: 1
  },
  button62: {
    height: 44,
    position: "absolute",
    left: "33.33%",
    top: "56.51%"
  },
  button61: {
    top: 442,
    left: 120,
    position: "absolute",
    height: 42,
    width: 109
  },
  button622: {
    position: "absolute",
    height: 43,
    width: 107,
    left: "33.61%"
  },
  image: {
    height: 96,
    width: 86,
    top: 157.56,
    position: "absolute"
  }
});
