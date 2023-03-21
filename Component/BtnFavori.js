import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native'
import React from 'react'


export default function BtnFavori() {


  return (
    <TouchableHighlight style={[styles.btnFavori]} onPress={()=>console.log("press")}  underlayColor={"#b18000"} activeOpacity={0.5}>
    <View style={styles.favori}>
        <Image source={require('../Asset/star.png')} style={{height:30,width:30,tintColor:"#f9b000"}}/>
        <Text style={{marginLeft:8}}>Add to Favori</Text>
    </View>
  </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  favori:{
    flexDirection:"row",
    alignItems:"center", 
  },
  btnFavori:{
    alignItems:"center",
    marginTop:20,
    width:"40%",
    borderRadius:10,
    paddingVertical:4,
  }
})