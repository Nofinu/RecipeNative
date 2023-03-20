import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipePage from './RecipePage'
import Homepage from './Homepage'
import RecipeDisplayPage from './RecipeDisplayPage'

export default function NavigationStack() {

  const Stack = createNativeStackNavigator() 
  return (
    <Stack.Navigator>
      <Stack.Screen key={"c00"} name='home' component={Homepage} options={{headerShown : false}}/>
      <Stack.Screen name={"RecipePage"} component={RecipePage} options={{title:"recipe Page"}}/>
      <Stack.Screen name={"Recipe"} component={RecipeDisplayPage} options={{title:"About the meal "}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})