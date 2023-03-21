import { StyleSheet, View,TouchableHighlight,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFavoriteAction, setFavoriteAction } from '../data/FavoriteSlice'



export default function BtnFavori(props) {

  const dispatch = useDispatch()

  const fav = useSelector(state=>state.favorit.favorite)

  const [starStatus,setStarStatus]=useState(false)

  const AddFav=()=>{
    if(starStatus){
      dispatch(removeFavoriteAction({id:props.id}))
    }
    else{
      dispatch(setFavoriteAction({id:props.id}))
    }
    //console.log("route: ",props.id)
  }

  useEffect(()=>{
    if(fav !== undefined){
      if(fav.includes(props.id)){
        console.log("fav",fav)
        console.log("id",props.id)
        setStarStatus(true)
      }
      else{
        setStarStatus(false)
      }
    }
  },[fav,props.id])

  return (
    <TouchableHighlight style={[styles.btnFavori]} onPress={AddFav}  underlayColor={"#b18000"} activeOpacity={0.5}>
    <View style={styles.favori}>
        <Image source={starStatus? require('../Asset/star.png'):require('../Asset/star-empty-icon.png')} style={{height:30,width:30,tintColor:"#f9b000"}}/>
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
    width:"40%",
    borderRadius:10,
    paddingVertical:4,
  }
})