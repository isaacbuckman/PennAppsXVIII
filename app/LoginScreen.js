import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard} from 'react-native'
import Auth0 from 'react-native-auth0';
import { Card, Button } from 'react-native-material-ui';
import {uploadStatus} from './api'

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
        uploadStatus(1.0, 1.0, 1.0, 232)
    }

    handleLogin() {
        console.log("AUTH")
        auth0
        .auth
        .passwordRealm({username: this.state.username, password: this.state.password, realm: "Username-Password-Authentication"})
        .then(apikey => {
            Keyboard.dismiss()
            this.props.navigation.navigate("Home")
        })
        .catch(error => {
            this.setState({error: true})
        });
    }

    render() {
        return (
            <View style={styles.masterView}>
                <Card style={styles.loginCard}>
                    <Text style={styles.headerText}>PennApps XVIII</Text>
                    <TextInput style={styles.input} keyboardType="email-address" onChangeText={(username) => {
                        this.setState({username})
                        }} placeholder="Username"/>
                    <TextInput style={styles.input} secureTextEntry onChangeText={(password) => {
                        this.setState({password})
                        }}  placeholder="Password"/>
                    <Button style={{height: 50}} raised primary text="Login" onPress={() => this.handleLogin()}/>
                    {this.state.error &&
                        <Text style={styles.errorText}>Your username or password is incorrect.</Text>
                    }
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    masterView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#a3b4d1"
    },
    loginCard: {
    },
    headerText: {
        textAlign: 'center',
        fontSize: 40
    },
    input: {
        backgroundColor: "white",
        paddingLeft: 12
    },
    errorText: {
        color: "red",
        fontSize: 15
    }
})