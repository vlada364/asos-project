import React from 'react';
import styles from "../RegistrationForm.module.css";



const InputPreferenceIn = ({name,value,checkPreferences,label,checked}) => {
    return <div  className={styles.radioCheck} >
        <input type="radio" name={name} value={value} checked={checked} onClick={(e)=>checkPreferences(e)} />
        <label>{label}</label>
    </div>;
}

export default InputPreferenceIn;