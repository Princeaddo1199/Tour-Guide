/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 20}} {...props}>
    <Text>Get Started</Text>
  </TouchableOpacity>
);
export default function OnboardingScreen({navigation}) {
  return (
    <Onboarding
      nextLabel="Next"
      bottomBarHighlight={false}
      onSkip={() => navigation.replace('login')}
      onDone={() => navigation.replace('login')}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboarding1.png')}
              style={styles.image}
            />
          ),
          title: 'Skip the tourist traps.',
          subtitle:
            'Find hidden gems, iconic spots, and cultural insights wherever you go.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboarding2.png')}
              style={styles.image}
            />
          ),
          title: 'We guide you as you move.',
          subtitle:
            'Your phone detects where you are and plays stories automatically-no map-checking needed.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboarding3.png')}
              style={styles.image}
            />
          ),
          title: 'Plug in and go.',
          subtitle:
            'High-quality narration brings every place to life-just like a real guide would.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboarding4.png')}
              style={styles.image}
            />
          ),
          title: 'No signal? No problem.',
          subtitle:
            'Download tours in advance and explore without needing the internet',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboarding5.png')}
              style={styles.image}
            />
          ),
          title: "Let's start your journey.",
          subtitle:
            'Sign up to access your personal dashboard, save your favourites, and pick your next adventure.',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
