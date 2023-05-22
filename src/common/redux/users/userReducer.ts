import {SET_LOGGED_IN_USER} from "./actions";
import {UserAction, UserState} from '../types/reduxTypes'

const initialState:UserState={
    loggedInUser:null
}
const userReducer=(state=initialState,action:UserAction)=>{
    switch (action.type) {
        case SET_LOGGED_IN_USER:
            return {...state,loggedInUser: action.payload};
        default:
            return state;
    }
}

export default userReducer;