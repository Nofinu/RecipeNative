import { createSlice } from "@reduxjs/toolkit";


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