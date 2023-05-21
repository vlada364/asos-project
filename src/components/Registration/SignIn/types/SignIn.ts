import {LabelAndName} from "../../../ClothCreationForm/utils/ClothesInfo";
import {TypeString} from "../../../../data/HeaderClothTypes/HeaderClothTypes";

export type textInput=LabelAndName & TypeString;

export type EmailAndPassword={
    email_address:string,
    password:string

}