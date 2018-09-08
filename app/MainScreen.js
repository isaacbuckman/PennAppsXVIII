/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PermissionsAndroid, TextInput, TouchableOpacity, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {uploadStatus, getFriend} from './api'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CountdownCircle from 'react-native-countdown-circle'
import MapViewDirections from 'react-native-maps-directions';

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

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
    },
    dest_lat: null,
    dest_long: null,
    searching: -1,
    result: null
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

  timeExpired() {
    Alert.alert(
      'No one was close by...',
      'Sorry, but no one was close by. You can try again at a later time.',
      [
        {text: 'OK', onPress: () => {}},
      ],
      { cancelable: false })
  }

  matchSuccessful() {
    console.log("SUCCESSFUL")
    this.map.fitToCoordinates([this.state.region, {latitude: this.state.dest_lat, longitude: this.state.dest_long}, {latitude: this.state.result.meetup_location[0], longitude: this.state.result.meetup_location[1]}], {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
    Alert.alert(
      'You successfully matched!',
      'You matched with ' + this.state.result.penn_id_of_partner + " and will be meeting soon. Just follow the directions.",
      [
        {text: 'OK', onPress: () => {}},
      ],
      { cancelable: false })
  }

  stopTimer() {
    this.setState({searching: -1})
    clearInterval(this.counter)
    this.counter = undefined
  }

  decrementSearching() {
    if (this.state.searching > 0) {
      this.setState({searching: this.state.searching-10})
      this.searchFriend()
    } else {
      this.stopTimer()
      this.timeExpired()
    }
  }

  startCounter() {
    this.setState({searching: 60})
    this.counter = setInterval(this.decrementSearching.bind(this), 10000)
  }

  searchFriend() {
    uploadStatus(this.state.region.latitude, this.state.region.longitude, this.state.dest_lat, this.state.dest_long, this.props.navigation.getParam("email", "none@example.com")).then(
      () => {
        getFriend(this.props.navigation.getParam("email", "none@example.com")).then(json => {
          if (!json || !json.penn_id_of_partner) {
            if (!this.counter) {
              this.startCounter()
            }
          } else {
            console.log(json)
            this.setState({result: json})
            this.stopTimer()
            this.matchSuccessful()
          }
        })
      }
    )
  }

  componentDidMount() {
    this.updateLocation();
  }

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          ref={ref => { this.map = ref; }}
          region = {this.state.region}>
        { this.state.dest_lat &&
          <Marker
            coordinate={{latitude: this.state.dest_lat, longitude: this.state.dest_long}}
            title="Destination"
            description=""
          />
        }
        <Marker
          coordinate={this.state.region}
          title="Current location"
          description=""
          pinColor="blue"
        />
        { this.state.result &&
          <Marker
            coordinate={{latitude: this.state.result.meetup_location[0], longitude: this.state.result.meetup_location[1]}}
            title="Meeting point"
            description=""
            pinColor="orange"
          />
        }
        { this.state.result &&
          <MapViewDirections
            origin={this.state.region}
            destination={{latitude: this.state.dest_lat, longitude: this.state.dest_long}}
            waypoints={[{latitude: this.state.result.meetup_location[0], longitude: this.state.result.meetup_location[1]}]}
            mode="walking"
            strokeWidth={3}
            strokeColor="hotpink"
            apikey="AIzaSyCIXYRaiIsZgQRapVNgy1VNK8qduZAcKpM"
          />
        }
      </MapView>
        <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      listViewDisplayed={ false }
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        this.setState({dest_lat: details.geometry.location.lat, dest_long: details.geometry.location.lng})
        this.map.fitToCoordinates([{latitude: details.geometry.location.lat, longitude: details.geometry.location.lng}, this.state.region], {
          edgePadding: DEFAULT_PADDING,
          animated: true,
        });
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyCIXYRaiIsZgQRapVNgy1VNK8qduZAcKpM',
        language: 'en', // language of the results
      }}
      
      styles={{
        textInputContainer: {
          width: '100%',
        },
        container: {
          height: 80,
          marginTop: 10,
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
        listView: {
          backgroundColor: "white"
        }
      }}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    />
        <View style={styles.bottomBar}>
          {this.state.searching > -1 &&
            <Text style={{fontSize: 15, flex: 1, fontWeight: "500"}}>Expiring in</Text>
          }
          {this.state.searching > -1 &&
            <CountdownCircle
                style={styles.countdownStyle}
                seconds={60}
                radius={30}
                borderWidth={8}
                color="#ff003f"
                bgColor="#fff"
                textStyle={{ fontSize: 20 }}
            />
          }
          <TouchableOpacity onPress={() => this.searchFriend()} style={[styles.signinButton, {backgroundColor: "white"}]}>
            <Text style={styles.signinText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  search: {
    backgroundColor: "white",
    marginTop: 10,
    opacity: 1,
    width: "96%",
    borderRadius: 20
  },
  bottomBar: {
    backgroundColor: "rgb(109, 186, 183)",
    position: "absolute",
    bottom: 0,
    height: 80,
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  signinButton: {
    backgroundColor: "rgba(179,224,228,1)",
    borderRadius: 5,
    height: 60,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 9,
    right: 10
  },
  signinText: {
      fontSize: 17,
      fontWeight: "500",
      color: "#000",
  },
  countdownStyle: {
    flex: 1,
    padding:7
  }
 });