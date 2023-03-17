import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecipeBox from './RecipeBox'

export default function RecipePage({route}) {

  return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          route.params.meals.map(meal=><RecipeBox title={meal.title} imageUrl={meal.imageUrl}/>)
        }
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"
  }
})