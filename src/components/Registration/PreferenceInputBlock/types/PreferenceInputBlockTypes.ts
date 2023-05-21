import {NameAndLabel} from "../../../ClothCreationForm/SelectSize/SelectSize";
import {ClickCheckbox} from "../Checkbox";
import React from "react";


export type ValueBoolean={
    [p:string]:boolean
}
export type FunctionCheckBox=ClickCheckbox


export type PreferenceCheck={
    preferenceCheckState:ValueBoolean
}
export type OnClickEvent={
    onClickSelectClear:(e: React.MouseEvent<HTMLInputElement>) => void
}

export type IsClear={
    isClearAll:boolean
}