import {HeaderClothWithPath} from "../../../data/HeaderClothTypes/HeaderClothTypes";
import {CategoryItemsMapType} from "../../../data/MenuItems";


export type ChangeById=(id:number)=>void

export type ClothesCategoryTypes={isMenuOpen:boolean,closeMenu:()=>void,categoryItems:{id:number,name:string}[]}
export type CategoryHeaderType={isMenuOpen:boolean,idCategories:number,clothCategory:HeaderClothWithPath[],closeMenu:()=>void,changeId:ChangeById,openMenu:()=>void}