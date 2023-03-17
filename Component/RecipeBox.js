import { Pressable ,StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function RecipeBox(props) {
  console.log("log recipebox",props.imageUrl)
  return (
    <Pressable style={styles.container}>
      <View>
        <Image source={{uri:props.imageUrl}} style={{width: "80%",height:400}} ></Image>
        <Text>{props.title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"80%",
    height:"50%",
    borderRadius:10,
    overflow:"hidden",
  }
})