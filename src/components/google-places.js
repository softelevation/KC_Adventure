import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import {strictValidArrayWithLength} from 'src/utils/commonUtils';
import {wp} from './responsive';
import {Text, Input} from '_elements';
const API_KEY = 'AIzaSyBsm0dvdFzqBuomYIx3INjnHdxuuFpEEyk';
const GOOGLE_API = 'https://maps.googleapis.com/maps/api/geocode/json';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      searchResults: [],
      isShowingResults: false,
    };
  }
  handleUrl = async url => {
    const response = await fetch(url).catch(() =>
      Promise.reject(new Error('Error fetching data')),
    );

    const json = await response.json().catch(() => {
      return Promise.reject(new Error('Error parsing server response'));
    });

    if (json.status === 'OK') {
      return json;
    }

    return Promise.reject(
      new Error(
        `${json.error_message}.\nServer returned status code ${json.status}`,
      ),
    );
  };

  searchLocation = async text => {
    this.setState({searchKeyword: text});
    this.props.onChangeText(text);
    if (text === '') {
      this.setState({
        searchResults: [],
        isShowingResults: false,
      });
    } else {
      axios
        .request({
          method: 'post',
          url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${this.state.searchKeyword}&libraries=places`,
        })
        .then(response => {
          this.setState({
            searchResults: response.data.predictions,
            isShowingResults: true,
          });
        })
        .catch(e => {
          console.log(e.response);
        });
    }
  };

  getLatLong = description => {
    axios
      .request({
        method: 'post',
        url: `${GOOGLE_API}?address=${encodeURIComponent(
          description,
        )}&key=${API_KEY}`,
      })
      .then(response => {
        this.handleUrl(
          `${GOOGLE_API}?address=${encodeURIComponent(
            description,
          )}&key=${API_KEY}`,
        );
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  render() {
    const {placeholder, onPress, searchKeyword, onChangeText} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.autocompleteContainer}>
          <Input
            placeholder={placeholder}
            // label={placeholder}
            primary
            onChangeText={text => this.searchLocation(text)}
            value={searchKeyword}
            error={this.props.error}
            onBlur={this.props.onBlur}
            ref={this.props.ref}
          />
          {this.state.isShowingResults &&
            strictValidArrayWithLength(this.state.searchResults) && (
              <View style={{height: 200, width: wp(85)}}>
                <FlatList
                  data={this.state.searchResults}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={styles.resultItem}
                        onPress={async () => {
                          this.setState({
                            searchKeyword: item.description,
                            isShowingResults: false,
                          });
                          // this.getLatLong(item.description);
                          const res = await this.handleUrl(
                            `${GOOGLE_API}?address=${encodeURIComponent(
                              item.description,
                            )}&key=${API_KEY}`,
                          );
                          onPress({
                            name: item.description,
                            latLng: res.results[0].geometry.location,
                          });
                        }}>
                        <Text grey>{item.description}</Text>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={item => item.id}
                  style={styles.searchResultsContainer}
                />
              </View>
            )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    zIndex: 1,
  },
  searchResultsContainer: {
    backgroundColor: '#fff',
  },
  resultItem: {
    width: wp(80),
    justifyContent: 'center',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 5,
  },
  searchBox: {
    width: wp(50),
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
  },
});
