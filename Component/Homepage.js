import { StyleSheet, Text, View , ScrollView,FlatList} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'
import ButtonRecippe from './ButtonRecippe'

export default function Homepage() {
  return (
      <FlatList style={styles.container} numColumns={2} horizontal={false} data={CATEGORIES} renderItem={(itemData)=>{
        return <ButtonRecippe key={itemData.item.id} categorie={itemData.item}/>
      }} keyExtractor={item => item.id}></FlatList> 
  )
}

const styles = StyleSheet.create({  
  container:{
    flex:1
}
})

              // <ScrollView contentContainerStyle={styles.container}>
    //   {
    //     CATEGORIES.map(categorie => <ButtonRecippe key={categorie.id} categorie={categorie}/>)
    //   }
    //    </ScrollView>