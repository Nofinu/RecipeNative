import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { UrlBase } from "../Service/FireBaseApiKey";

export const FetchFavorite = createAsyncThunk(
  "Favorite/FetchFavorite",
  async ()=>{
    console.log(UrlBase+"favorite")
    const response = await axios.get(UrlBase+"favorite")

    //console.log("log",response.data)

    return tmpTab
  }
)

const FavoriteSlice = createSlice({
  name:"Favorite",
  initialState:{
    favorite:[]
  },
  reducers:{
    setFavoriteAction(state,actions){
      if(state.favorite.find(fav => fav === actions.payload.id) === undefined){
        state.favorite.push(actions.payload.id)
      }
    },
    removeFavoriteAction(state,actions){
      state.favorite.splice(state.favorite.indexOf(actions.payload.id),1)
    }
  }
})

  export const {setFavoriteAction,removeFavoriteAction} = FavoriteSlice.actions

export default FavoriteSlice.reducer