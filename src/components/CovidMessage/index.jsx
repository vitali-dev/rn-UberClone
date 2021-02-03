import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necassray</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos deserunt
        tempore ab quas minus praesentium magnam modi repudiandae officiis
        molestias facere, iusto voluptates itaque perferendis, delectus mollitia
        esse assumenda! Non.
      </Text>
      <Text style={styles.learnMore}>Learn it!</Text>
    </View>
  );
};

export default CovidMessage;
