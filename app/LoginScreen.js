import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity} from 'react-native'
import Auth0 from 'react-native-auth0';
import { Card, Button } from 'react-native-material-ui';
import {uploadStatus, getFriend, addUser} from './api'

const auth0 = new Auth0({ domain: 'kusti8.auth0.com', clientId: 'c3FBJS3keEnuRH1WPm1Xrt0in43NIzRh' });

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
        };
        constructor(props) {
            super(props)
            this.state = {
                username: "",
                password: "",
                error: false
            }
        }

    componentDidMount() {
        //addUser('dsd@gmail.com', 'adasdsad8HNnidasda@')
    }

    handleLogin() {
        console.log("AUTH")
        auth0
        .auth
        .passwordRealm({username: this.state.username, password: this.state.password, realm: "Username-Password-Authentication"})
        .then(apikey => {
            auth0
            .auth
            .userInfo({token: apikey.accessToken}).then( results => {
                Keyboard.dismiss()
                this.props.navigation.navigate("Main", {email: this.state.username, name: results.Name})
            })
        })
        .catch(error => {
            this.setState({error: true})
        });
    }

    render() {
        return (
            <View style={styles.masterView}>
                <Text style={styles.titleStyle}>S I G N - I N</Text>
                <TextInput style={styles.textInput} placeholder="Email" underlineColorAndroid="rgb(164,164,164)" placeholderTextColor="rgb(164,164,164)" onChangeText={username => this.setState({username})} />
                <TextInput style={styles.textInput} secureTextEntry placeholder="Password" underlineColorAndroid="rgb(164,164,164)" placeholderTextColor="rgb(164,164,164)" onChangeText={password => this.setState({password})} />
                {this.state.error &&
                    <Text style={{color: "red", fontSize: 15}}>Your username or password is incorrect. Make sure you verified your email also.</Text>
                }
                <TouchableOpacity onPress={() => this.handleLogin()} style={[styles.signinButton, {backgroundColor: "#d48578", marginBottom: 200}]}>
                    <Text style={styles.signinText}>Enter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    masterView: {
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
    titleStyle: {
        flex: 1,
        fontSize: 30,
        fontWeight: "100",
        marginTop: 100,
        color: "white"
    },
    textInput: {
        color: "white",
        width: "75%"
    }
})