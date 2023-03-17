import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './Component/NavigationStack'

export default function App() {

  return (
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
)
}

const styles = StyleSheet.create({})