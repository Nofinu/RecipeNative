import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipePage from './RecipePage'
import Homepage from './Homepage'
import { CATEGORIES } from '../data/data'

export default function NavigationStack() {

  const Stack = createNativeStackNavigator() 
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Homepage} options={{headerShown : false}}/>
      {
        CATEGORIES.map(categorie=> <Stack.Screen name={categorie.id} component={RecipePage} options={{title:categorie.title}}/>)
      }
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})