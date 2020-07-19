import React from 'react'
import { Text, Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

import ScrollWrapper from 'wrappers/ScrollWrapper'

export default function Animations ({ navigation }) {
  return (
    <ScrollWrapper customStyles={styles.container}>
      <Text style={styles.title}>Animations</Text>
      <Button
        title='GO to animation one'
        onPress={() => navigation.navigate('animation-one')}
      />
       <Button
        title='GO to animation two'
        onPress={() => navigation.navigate('animation-two')}
      />
      <StatusBar style='dark' backgroundColor='white' />
    </ScrollWrapper>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
  title: {
    paddingVertical: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 48
  }
})
