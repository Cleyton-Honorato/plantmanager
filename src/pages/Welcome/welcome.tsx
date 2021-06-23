import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Welcome() {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('User');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <StatusBar style="auto" />
        <Text style={styles.title}>
          Gerencie
          {' '}
          {'\n'}
          suas plantas de
          {'\n'}
          forma fácil!
        </Text>

        <Image
          source={wateringImg}
          style={styles.img}
          resizeMode="contain"
        />

        <Text style={styles.subTitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },

  img: {
    height: Dimensions.get('window').width * 0.7,
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
