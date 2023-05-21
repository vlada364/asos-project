import React from 'react';
import styles from "../RegistrationForm.module.css";
import Checkbox from "./Checkbox";
import {NameAndLabel} from "../../ClothCreationForm/SelectSize/SelectSize";
import {ValueBoolean} from "./types/PreferenceInputBlockTypes";


export const checkboxList:NameAndLabel[]=[{label:'Discounts and sales',name:'DiscountsAndSales'},{label:'New stuff',name:'NewStuff'},
    {label:'Your exclusives',name:'YourExclusives'},{label:'Asos partners',name:'AsosPartners'}]

type PreferenceCheckBox={
    checkboxesState:ValueBoolean,
    clickCheckBox:(e: React.MouseEvent<HTMLInputElement>) => void
}

const PreferencesCheckboxes = ({checkboxesState,clickCheckBox}:PreferenceCheckBox) => {

    return  <div id="input_select" className={styles.inputSelectContainer}>
        {checkboxList.map(({name,label})=>(<Checkbox name={name} label={label} value={checkboxesState[name]} clickCheckBox={clickCheckBox}/>))}
    </div>;
}

export default PreferencesCheckboxes;