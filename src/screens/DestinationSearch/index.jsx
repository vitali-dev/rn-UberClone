import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyAInMbzldYqiAp8chQb1yjJvNsLMexaijc',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyAInMbzldYqiAp8chQb1yjJvNsLMexaijc',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
