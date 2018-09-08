import React, {Component} from 'react';
import {StyleSheet, View, Button, TouchableOpacity, Text, Image} from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        };
    render() {
        return (
            <View style={styles.root}>
                <Image
                    source={require("./assets/Packk_logo3.png")}
                    style={styles.image}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={styles.signinButton}>
                    <Text style={styles.signinText}>SIGN-IN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")} style={[styles.signinButton, {backgroundColor: "white"}]}>
                    <Text style={styles.signinText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "rgba(44,41,41,1)",
        flex: 1,
        height: "100%",
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signinButton: {
        backgroundColor: "rgba(179,224,228,1)",
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 5,
        marginTop: 30,
        height: 60,
        width: 150,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    signinText: {
        fontSize: 17,
        fontWeight: "500",
        color: "#000",
    },
    image: {
        height: 96,
        width: 86,
      }
})