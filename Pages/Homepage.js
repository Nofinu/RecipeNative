import { StyleSheet, FlatList, Button} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'
import ButtonRecippe from '../Component/ButtonRecippe'
import { useDispatch, useSelector } from 'react-redux'
import { FetchFavorite } from '../data/FavoriteSlice'

export default function Homepage() {

  const dispatch = useDispatch()


  const send=()=>{
    dispatch(FetchFavorite())
  }
  return (
    <>
    <Button title="pres" onPress={send}/>
      <FlatList numColumns={2} horizontal={false} data={CATEGORIES} renderItem={(itemData)=>{
        return <ButtonRecippe key={itemData.item.id} categorie={itemData.item}/>
      }} keyExtractor={item => { return item.id}}/>
    </>
  )
}

const styles = StyleSheet.create({  
  container:{
    backgroundColor:"grey"
  }
})
