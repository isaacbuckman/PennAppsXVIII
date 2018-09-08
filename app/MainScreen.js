/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';
import {uploadStatus} from './api'


export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };

  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  }

  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
  }

  async getPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'We need your permission',
          'message': 'We need your permission to meet with people'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permission granted")
      } else {
        console.log("Permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  updateLocation() {
    this.getPermission().then(() => {
      this.getCurrentLocation().then(position => {
        if (position) {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            },
          });
        }
      });
    })
  }

  componentDidMount() {
    this.updateLocation();
  }

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region = {this.state.region}/>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });