import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './Component/NavigationStack'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"grey"
  }
})