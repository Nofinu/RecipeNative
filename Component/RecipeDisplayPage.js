import { StyleSheet, Text, View, Image,ScrollView  } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import { MEALS } from '../data/data'

export default function RecipeDisplayPage({navigation,route}) {

  const [recipe,setRecipe]=useState({})



  const findRecipe=()=>{
    const recipeFound = MEALS.find(meal => meal.title === route.params.titleRecipe)
    setRecipe(recipeFound)
  }

  useEffect(() => {
    findRecipe()
    navigation.setOptions({title:route.params.titleRecipe})
  }, [])
  
  return (
    <ScrollView>
      {
        recipe.imageUrl !== undefined &&
        <>
          <Image source={{uri:recipe.imageUrl}} style={{height:300}}/>
          <Text style={styles.title}>{recipe.title}</Text>
          <View style={styles.underTitleContainer}>
            <Text style={styles.underTitle}>{recipe.duration} mins </Text>
            <Text style={styles.underTitle}>{recipe.complexity}</Text>
            <Text style={styles.underTitle}>{recipe.affordability}</Text>
          </View>
          <View style={styles.underTitleContainer}>
            {recipe.isGlutenFree && <Text>Gluten Free</Text>}
            {recipe.isVegan && <Text>Vegan</Text>}
            {recipe.isVegetarian && <Text>Vegetarian</Text>}
            {recipe.isLactoseFree && <Text>Lactose Free</Text>}
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.titleContainer}>Ingredients :</Text>
            <View style={styles.hr}></View>
            {
              recipe.ingredients.map((ingredient,index) => <Text style={styles.textList} key={index}>{ingredient}</Text>)
            }
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.titleContainer}>Steps :</Text>
            <View style={styles.hr}></View>
            {
              recipe.steps.map((step,index) => <Text style={styles.textList} key={index}>{step}</Text>)
            }
          </View>
        </>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:23,
  },
  underTitle:{
    fontSize:18,
  },
  underTitleContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  titleContainer:{
    fontSize:20,
    color:"#FFB266"
  },
  listContainer:{
    marginTop:25,
    justifyContent:"center",
    alignItems:"center",
  },
  textList:{
    width:"80%",
    textAlign:'center',
    fontSize:16,
    backgroundColor:"#FFB266",
    color:"white",
    borderRadius:10,
    paddingVertical:3,
    marginTop:5,
  },
  hr:{
    backgroundColor:"#FFB266",
    height:1,
    width:"90%"
  }
})