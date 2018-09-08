import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator
} from "react-native";

export default class list1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <FlatList
        style={[styles.root, this.props.style]}
        renderItem={({ item, separators }) => {
          return (
            <View style={styles.rect1}>
              <Text style={styles.text1}>List Row</Text>
            </View>
          );
        }}
      >
        <ActivityIndicator />
        <ActivityIndicator />
        <ActivityIndicator />
        <Text>Text Added</Text>
        <Text>Text Added</Text>
        <Text>Text Added</Text>
        <Text>Text Added</Text>
        <Text>Text Added</Text>
      </FlatList>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  rect1: {
    height: 43,
    flexDirection: "row",
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0,
    borderBottomColor: "#CECED2",
    borderBottomWidth: 1
  },
  text1: {
    fontSize: 17,
    color: "#212121"
  }
});
