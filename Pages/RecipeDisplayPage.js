import { StyleSheet, Text, View, Image,ScrollView, TouchableHighlight } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import { MEALS } from '../data/data'
import List from '../Component/List'
import BtnFavori from '../Component/BtnFavori';

export default function RecipeDisplayPage({navigation,route}) {

  const [recipe,setRecipe]=useState({})

  const findRecipe=()=>{
    const recipeFound = MEALS.find(meal => meal.title === route.params.titleRecipe)
    setRecipe(recipeFound)
  }



  useEffect(() => {
      findRecipe()
      if(recipe !=={}){
        console.log("recipedisplay...",recipe.id)
        navigation.setOptions({title:route.params.titleRecipe,headerRight : ()=> <BtnFavori id={recipe.id}/>})
      }
  }, [recipe])
  
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
          {/* <View style={{alignItems:"center"}}>
            <BtnFavori id={recipe.id}/>
          </View> */}
          <View style={styles.listContainer}>
            <Text style={styles.titleContainer}>Ingredients :</Text>
            <View style={styles.hr}></View>
            <List data={recipe.ingredients}/>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.titleContainer}>Steps :</Text>
            <View style={styles.hr}></View>
            <List data={recipe.steps}/>
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
    color:"#b56f1b"
  },
  listContainer:{
    marginTop:25,
    justifyContent:"center",
    alignItems:"center",
  },
  hr:{
    backgroundColor:"#b56f1b",
    height:1,
    width:"90%"
  },
  favori:{
    flexDirection:"row",
    alignItems:"center", 
  },
  btnFavori:{
    alignItems:"center",
    marginTop:20,
    width:"40%",
    borderRadius:10,
    paddingVertical:4,
  }

})