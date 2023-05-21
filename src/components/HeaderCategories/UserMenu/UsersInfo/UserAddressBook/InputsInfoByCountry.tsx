import React from 'react';
import {ValueAndLabel} from "../../../../ClothCreationForm/utils/ClothesInfo";


type Code={
    code?:string
}
type TooltipText={
    tooltipText?:string
}
const InputsInfoByCountry= ({label,value,code,tooltipText}:ValueAndLabel&Code&TooltipText) => {
    return (
            <option value={value} style={{padding:'20px 20px'}}>{label}</option>

    );
}

export default InputsInfoByCountry;