import {Action} from 'redux';
import {User, BasketCloth} from "../../types/user/User";

export interface UserState {
    loggedInUser: User | null;
}

export type BasketState =BasketCloth[]

export type FavoriteClothesState =number[];

export interface SetLoggedInUserAction extends Action {
    type: 'SET_LOGGED_IN_USER';
    payload: User | null;
}

export type UserAction = SetLoggedInUserAction;

export interface SetClothesAction extends Action {
    type: 'SET_CLOTHES_ADD',
    payload: BasketState,
}

export interface AddFavoriteItemAction extends Action {
    type: 'ADD_FAVOURITE_ITEM',
    payload: FavoriteClothesState
}

export interface SetFavoriteItemAction extends Action {
    type: 'SET_FAVOURITE_ITEM',
    payload: FavoriteClothesState
}

export type ClothesAction = SetClothesAction | AddFavoriteItemAction | SetFavoriteItemAction