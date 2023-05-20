import React  from 'react';
import styles from "../RegistrationForm.module.css";
import {ValueAndName} from "../Form/utils/FormInformation";
import {Label} from "../Form/utils/FormInformation";
import {MouseEvent} from 'react';

export type MouseEventType={checkPreferences:(e:React.MouseEvent<HTMLInputElement>)=>void}

export type BooleanChecked={
    checked:boolean
}

export type InputPreference=ValueAndName & Label &  MouseEventType & BooleanChecked
const InputPreferenceIn = ({name,value,checkPreferences,label,checked}:InputPreference) => {
    return <div  className={styles.radioCheck} >
        <input type="radio" name={name} value={value} checked={checked} onClick={(e)=>checkPreferences(e)} />
        <label>{label}</label>
    </div>;
}

export default InputPreferenceIn;