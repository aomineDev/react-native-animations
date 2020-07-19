import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default function TouchMe () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Touch Me</Text>
    </View>
  )
}