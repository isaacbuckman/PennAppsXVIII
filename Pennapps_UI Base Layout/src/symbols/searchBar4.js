import React, { Component } from "react";
import Icon from "@builderx/icons";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export default class searchBar4 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 44,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.inputBox}>
          <Icon
            style={styles.inputLeftIcon}
            name="magnify"
            type="MaterialCommunityIcons"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
          <TouchableOpacity style={styles.recordButton}>
            <Icon
              style={styles.inputRightIcon}
              name="ios-mic"
              type="Ionicons"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rightIconButton}>
          <Text style={styles.rightButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 8,
    paddingRight: 0
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#404040",
    borderRadius: 20
  },
  inputLeftIcon: {
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  inputStyle: {
    height: 32,
    flex: 1,
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: "Roboto",
    lineHeight: 15,
    color: "#FFF"
  },
  recordButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    marginRight: 8,
    borderRadius: 13
  },
  inputRightIcon: {
    alignSelf: "center",
    opacity: 0.7,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightButtonText: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#FFF"
  }
});
