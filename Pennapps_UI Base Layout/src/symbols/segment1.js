import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class segment1 extends Component {
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
        <View style={styles.textWrapper}>
          <TouchableOpacity style={styles.segmentTextWrapperLeft}>
            <Text style={styles.titleLeft}>Puppies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentTextWrapperRight}>
            <Text style={styles.titleRight}>Cubs</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    flexDirection: "row",
    paddingRight: 30,
    paddingLeft: 30
  },
  segmentTextWrapperLeft: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  titleLeft: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#FFFFFF"
  },
  segmentTextWrapperRight: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  titleRight: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#007AFF"
  }
});
