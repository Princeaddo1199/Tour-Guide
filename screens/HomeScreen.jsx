import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.containerMain}>
      <Text>Welcome to the home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
