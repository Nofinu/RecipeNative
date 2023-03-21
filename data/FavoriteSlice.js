import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { UrlBase } from "../Service/FireBaseApiKey";

export const FetchFavorite = createAsyncThunk(
  "Favorite/FetchFavorite",
  async ()=>{
    const response = await axios.get(UrlBase+"/-NR3_gaqaOgp5cE63Q8r.json")
    return response.data.fav
  }
)

export const PatchFavorite = createAsyncThunk(
  "Favorite/AddFavorite",
  async(data,{getState})=>{
    const fav = getState().favorit.favorite
    axios.patch(UrlBase+"/-NR3_gaqaOgp5cE63Q8r.json",{fav:fav})
  }
)

const FavoriteSlice = createSlice({
  name:"Favorite",
  initialState:{
    favorite:[]
  },
  reducers:{
    setFavoriteAction(state,actions){
      console.log(actions.payload)
      if(state.favorite.find(fav => fav === actions.payload.id) === undefined){
        state.favorite.push(actions.payload.id)
      }
    },
    removeFavoriteAction(state,actions){
      state.favorite.splice(state.favorite.indexOf(actions.payload.id),1)
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(FetchFavorite.fulfilled,(state,action)=>{
      state.favorite=action.payload
    })
  }
})

  export const {setFavoriteAction,removeFavoriteAction} = FavoriteSlice.actions

export default FavoriteSlice.reducer