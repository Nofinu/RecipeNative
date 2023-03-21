import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Favori() {
  const navigation = useNavigation()
  return (
    <View>
      <Button title="return to home page" onPress={()=>navigation.navigate("home")}/>
      <Text>Favori</Text>
    </View>
  )
}

const styles = StyleSheet.create({})