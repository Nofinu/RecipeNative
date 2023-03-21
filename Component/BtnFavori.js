import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setFavoriteAction } from '../data/FavoriteSlice'


export default function BtnFavori(props) {

  const dispatch = useDispatch()

  const AddFav=()=>{
    dispatch(setFavoriteAction(props.id))
  }

  return (
    <TouchableHighlight style={[styles.btnFavori]} onPress={AddFav}  underlayColor={"#b18000"} activeOpacity={0.5}>
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