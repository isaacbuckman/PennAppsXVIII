import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class segment3 extends Component {
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
          <TouchableOpacity style={styles.segmentTextWrapper1}>
            <Text style={styles.text1}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentTextWrapper2}>
            <Text style={styles.text2}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentTextWrapper3}>
            <Text style={styles.text3}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentTextWrapper4}>
            <Text style={styles.text4}>Year</Text>
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
    backgroundColor: "rgba(44,41,41,1)",
    opacity: 0.52
  },
  textWrapper: {
    height: 29,
    flex: 1,
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  segmentTextWrapper1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(212,133,120,1)",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    opacity: 1
  },
  text1: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#FFFFFF"
  },
  segmentTextWrapper2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)"
  },
  text2: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "rgba(74,74,74,1)"
  },
  segmentTextWrapper3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)"
  },
  text3: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "rgba(74,74,74,1)"
  },
  segmentTextWrapper4: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  text4: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "rgba(74,74,74,1)"
  }
});
