import { Image, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import RecipePage from '../Pages/RecipePage.js'
import RecipeDisplayPage from '../Pages/RecipeDisplayPage.js'
import Favori from '../Pages/Favori.js'
import Homepage from '../Pages/Homepage.js'

export default function NavigationStack() {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Recipes" component={MyStack}/>
      <Drawer.Screen name="favori" component={Favori} options={{headerShown:true}} />
    </Drawer.Navigator>
  )
}

function MyStack(){
  const Stack = createNativeStackNavigator() 
  return(
    <Stack.Navigator>
      <Stack.Screen name='home' component={Homepage} options={{headerLeft : MyButton,title:"" }}/>
      <Stack.Screen name="RecipePage" component={RecipePage} options={{title:"recipe Page"}}/>
      <Stack.Screen name="Recipe" component={RecipeDisplayPage} options={{title:"About the meal "}}/>
    </Stack.Navigator>
  )
}

function MyButton(){
  const navigation=useNavigation()
  return(
    <Pressable onPress={()=> navigation.openDrawer()}>
      <Image source={require('../Asset/DrawerIcon.png')} style={{height:40,width:40}}/>
    </Pressable>
  )
}
const styles = StyleSheet.create({})