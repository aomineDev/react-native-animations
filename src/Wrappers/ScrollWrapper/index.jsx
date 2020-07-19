import React from 'react'
import { ScrollView } from 'react-native'

import styles from './styles'

export default function ScrollWrapper ({ children, customStyles }) {
  return (
    <ScrollView style={[styles.container, customStyles]} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  )
}