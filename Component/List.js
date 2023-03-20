import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function List({data}) {
  return data.map((item,i)=><Text style={styles.textList} key={i}>{item}</Text>)
}

const styles = StyleSheet.create({  
  textList:{
  width:"80%",
  textAlign:'center',
  fontSize:16,
  backgroundColor:"#b56f1b",
  color:"white",
  borderRadius:10,
  paddingVertical:3,
  marginTop:5,
},})