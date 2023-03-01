import React from 'react';
import {countries} from "../../constants/countries";
import InputsInfoByCountry from "./InputsInfoByCountry";


const ListOfCountries = ({inputsCodeValue,codeOfCountry,handleCountrySelect}) => {
    return (<div style={{display: 'flex', flexDirection: 'row'}}>
        <div>{inputsCodeValue === '' ?
            <img src='/img/countryIcon.svg' style={{width: '50px'}}/> :
            <img src={`https://assets.asosservices.com/storesa/images/flags/${codeOfCountry}.png`}
                 style={{width: '50px'}}/>}</div>
        <div><select name='countryCode' value={inputsCodeValue}
                     onChange={handleCountrySelect} style={{padding: '15px 21px'}}>
            <option value={''} disabled={inputsCodeValue!== ''}>Please select:</option>
            {countries.map(el => (
                <InputsInfoByCountry key={el.id} value={el.code} label={el.name}
                />))}
        </select>
        </div>
    </div>);
}

export default ListOfCountries;