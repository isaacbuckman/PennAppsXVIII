import React, { Component } from 'react'
import {View, ImageBackground, StyleSheet, Text, Image} from 'react-native'

export default class SplashScreen extends Component {

    static navigationOptions = {
        header: null,
        };

    navigate() {
        console.log("Going home")
        this.props.navigation.navigate("Home")
    }

    componentDidMount() {
        setTimeout(this.navigate.bind(this), 5000)
    }

    render() {
        return (
                <ImageBackground
                style={styles.backgroundImage}
                source={require('./assets/o2.png')}>
                    <Image source={require('./assets/Packk_logo3.png')} style={styles.logo} />
                    <Text style={styles.titleText}>W O L F P A C K K</Text>
                    <View style={{borderWidth: 1, position: "absolute", bottom: 10, borderColor: "white"}}>
                        <Text style={styles.copyright}>2018</Text>
                    </View>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        opacity: 0.9,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "500",
        color: "white",
        alignSelf: "center"
    },
    logo: {
        marginBottom: 100,
        marginTop: 110,
        height: 96,
        width: 86,
    },
    copyright: {
        fontSize: 20,
        fontWeight: "500",
        color: "white"
    }
})