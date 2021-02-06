import React from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomeMap = (props) => {
  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
        <Image
          style={{width: 70, height: 70, resizeMode: 'contain'}}
          source={require('../../assets/images/top-UberX.png')}
        />
      </Marker>
    </MapView>
  );
};

export default HomeMap;
