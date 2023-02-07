import React from 'react';
import styles from "../RegistrationForm.module.css";



const Checkbox = ({name,clickCheckbox,value}) => {
    return (<div className={styles.inputSelectCategory}>
        <label>{name}</label>
        <input type="checkbox" name={name} className="checkbox-input" checked={value} onClick={(e)=>clickCheckbox(e)}/>
    </div>);
}

export default Checkbox;