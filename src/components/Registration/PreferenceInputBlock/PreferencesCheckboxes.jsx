import React from 'react';
import styles from "../RegistrationForm.module.css";
import Checkbox from "./Checkbox";


export const checkboxList=[{name:'Discounts and sales'},{name:'New stuff'},{name:'Your exclusives'},{name:'Asos partners'}]

const PreferencesCheckboxes = ({clickCheckBox,checkboxesState}) => {

    return  <div id="input_select" className={styles.inputSelectContainer}>
        {checkboxList.map(el=>(<Checkbox name={el.name} value={checkboxesState[el.name]} clickCheckbox={clickCheckBox}/>))}
    </div>;
}

export default PreferencesCheckboxes;