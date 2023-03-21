import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MEALS } from '../data/data'
import RecipeBox from '../Component/RecipeBox'
import { useSelector } from 'react-redux/'

export default function Favori() {

  const [Meals,setMeals]=useState([])

  const fav = useSelector(state => state.favorit.favorite)
  
  useEffect(()=>{
    console.log(fav)
    setMeals([])
    let tmptab =[]
    MEALS.forEach(meal => {
      if(fav.includes(meal.id)){
        tmptab.push(meal)
      }
    })
    setMeals(tmptab)
  },[fav])

  return (
    <View style={{alignItems:'center'}}>
      <FlatList data={Meals} renderItem={(itemData)=>{
            return <RecipeBox title={itemData.item.title} imageUrl={itemData.item.imageUrl} complexity={itemData.item.complexity} duration={itemData.item.duration}/>
          }} keyExtractor={item => item.id}/>
    </View>
  )
}

const styles = StyleSheet.create({})