

export const SET_CLOTHES_ADD='SET_CLOTHES_ADD';
export const ADD_FAVORITE_ITEM='ADD_FAVOURITE_ITEM';
export const SET_FAVORITE_ITEM='SET_FAVOURITE_ITEM'


export const setClothesAdd=(clothes)=>({type:SET_CLOTHES_ADD,payload:clothes})

export const addFavoriteItem=(cloth)=>({type:ADD_FAVORITE_ITEM,payload: cloth});

export const setFavoriteItems=(clothIds)=>({type:SET_FAVORITE_ITEM,payload: clothIds})