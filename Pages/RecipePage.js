import { FlatList, SafeAreaView, StyleSheet} from 'react-native'
import { useEffect,useState } from 'react';
import React from 'react'
import RecipeBox from '../Component/RecipeBox'
import { MEALS } from '../data/data';

export default function RecipePage({navigation,route}) {

const [meals,setMeals]=useState([])

  const findMeal=()=>{
    const mealFound = [...MEALS.filter(meal => meal.categoryIds.includes(route.params.id))]
    setMeals(mealFound)
  }

  useEffect(() => {
    findMeal()
    navigation.setOptions({title:route.params.title})
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      {
        meals.length >0&&
        <>
          <FlatList data={meals} renderItem={(itemData)=>{
            return <RecipeBox title={itemData.item.title} imageUrl={itemData.item.imageUrl} complexity={itemData.item.complexity} duration={itemData.item.duration}/>
          }} keyExtractor={item => item.id}>
          </FlatList>
        </>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"
  }
})