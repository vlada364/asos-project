import React from 'react';
import styles from "../RegistrationForm.module.css";
import Checkbox from "./Checkbox";


const checkboxList=[{name:'Discounts and sales'},{name:'New stuff'},{name:'Your exclusives'},{name:'Asos partners'}]

const CheckboxList = () => {
    return  <div id="input_select" className={styles.inputSelectContainer}>
        {checkboxList.map(el=>(<Checkbox name={el.name}/>))}
    </div>;
}

export default CheckboxList;