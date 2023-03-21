import { StyleSheet, View , FlatList} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'
import ButtonRecippe from './ButtonRecippe'

export default function Homepage() {
  return (
      <FlatList numColumns={2} horizontal={false} data={CATEGORIES} renderItem={(itemData)=>{
        return <ButtonRecippe key={itemData.item.id} categorie={itemData.item}/>
      }} keyExtractor={item => { return item.id}}/>
  )
}

const styles = StyleSheet.create({  
  container:{
    backgroundColor:"grey"
  }
})
