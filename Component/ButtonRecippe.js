import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/data';

export default function ButtonRecippe(props) {

  const navigation = useNavigation()

  const {title,color,id}=props.categorie
  const colorbtn={backgroundColor:color}
  const [meals ,setMeals]=useState([])

  const findMeal=()=>{
    const mealFound = [...MEALS.filter(meal => meal.categoryIds.includes(id))]
    setMeals(mealFound)
  }

  useEffect(() => {
  findMeal()
  },[])
  

  return (
      <Pressable style={[styles.btn,colorbtn]} onPress={()=>navigation.navigate(id,{meals:meals})}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  btn:{
    height:"100%",
    width:"40%",
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
  text:{
    color:"white"
  }
})