import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button } from '../../components/Button/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>

        <Text style={styles.subtitle}>
          Prontinho 
        </Text>

        <Text style={styles.title}>
          teste
        </Text>

        <View style={styles.footer}>
          <Button />
        </View>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
  },

  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },

  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.heading,
    paddingVertical: 10,
  },

  emoji: {
    fontSize: 80,
  },

  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  }
});