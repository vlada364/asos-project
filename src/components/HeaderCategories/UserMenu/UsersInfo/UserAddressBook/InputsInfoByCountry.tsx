import React from 'react';
import {ValueAndLabel} from "../../../../ClothCreationForm/utils/ClothesInfo";

const InputsInfoByCountry = ({label, value}: ValueAndLabel) => {
    return (
        <option value={value} style={{padding: '20px 20px'}}>{label}</option>
    );
}

export default InputsInfoByCountry;