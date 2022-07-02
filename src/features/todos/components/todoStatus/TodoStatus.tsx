import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from 'shared/components/ThemedText'
import { TTodoStatusProps } from './models/types'
import { scaleFontSize, scaleHeight } from 'utils/scaling'
import { EStatus } from 'features/todos/models/enums/ETodo.enums/EStatus.enum'

export const TodoStatus = ({status}:TTodoStatusProps) => {
    const isPrending = status===EStatus.pending

  return (
    <View style={styles.container}>
      <ThemedText style={styles.status}>{status}</ThemedText>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:scaleHeight(6)
    },
    status:{
       opacity: 0.5
    }
})