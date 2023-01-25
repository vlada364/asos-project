import {SET_CLOTHES_ADD, ADD_FAVORITE_ITEM, SET_FAVORITE_ITEM} from "./actions";


const initialState={
    basketItems:[],
    favoriteItems:[]
}

const clothesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_CLOTHES_ADD:
            return {...state,basketItems: action.payload};
        case ADD_FAVORITE_ITEM:
            return {...state,favoriteItems:[...state.favoriteItems,action.payload]};
        case SET_FAVORITE_ITEM:
            return {...state,favoriteItems: action.payload};
        default:
            return state;
    }
}

export default clothesReducer;