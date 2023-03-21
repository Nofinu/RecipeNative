import { createSlice } from "@reduxjs/toolkit";


const FavoriteSlice = createSlice({
  name:"Favorite",
  initialState:{
    favorite:[]
  },
  reducers:{
    setFavoriteAction(state,actions){
      if(state.favorite.find(fav => fav === actions.payload) === undefined){
        state.favorite.push(actions.payload)
      }
    }
  }
})

  export const {setFavoriteAction} = FavoriteSlice.actions

export default FavoriteSlice.reducer