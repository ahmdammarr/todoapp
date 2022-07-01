import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Todos = () => {
  return (
    <View style={styles.container}>
      <Text>TodosScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });