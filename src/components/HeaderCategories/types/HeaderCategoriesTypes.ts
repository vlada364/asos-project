import {HeaderClothWithPath} from "../../../data/HeaderClothTypes/HeaderClothTypes";

export type CategoryHeaderType={isMenuOpen:boolean,idCategories:number,clothCategory:HeaderClothWithPath[],closeMenu:()=>void,changeId:(id:number)=>void,openMenu:(id:number)=>void}