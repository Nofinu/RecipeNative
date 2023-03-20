import { Pressable ,StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RecipeBox(props) {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("Recipe",{titleRecipe:props.title})}>
      <View>
        <Image source={{uri:props.imageUrl}} style={{height:200}} ></Image>
        <Text style={styles.text}>{props.title}</Text>
        <View style={styles.display}>
          <Text>{props.duration} mins </Text>
          <Text>{props.complexity}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:35,
    width:350,
    height:250,
    borderRadius:10,
    overflow:"hidden",
    backgroundColor:"white",
  },
  text:{
    textAlign:"center",
    fontSize:18,
  },
  display:{
    flexDirection:'row',
    justifyContent:"space-evenly"
  }
})