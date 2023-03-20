import { FlatList, SafeAreaView, StyleSheet} from 'react-native'
import { useEffect } from 'react';
import React from 'react'
import RecipeBox from './RecipeBox'

export default function RecipePage({navigation,route}) {

  useEffect(() => {
    navigation.setOptions({title:route.params.title})
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={route.params.meals} renderItem={(itemData)=>{
        return <RecipeBox title={itemData.item.title} imageUrl={itemData.item.imageUrl} complexity={itemData.item.complexity} duration={itemData.item.duration}/>
      }} keyExtractor={item => item.id}>
      </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"
  }
})