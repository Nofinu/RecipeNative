import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './Component/NavigationStack'
import { Provider } from 'react-redux'
import { store } from './Service/store'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <NavigationStack/>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"grey"
  }
})


//npm i react-redux @reduxjs/toolkit