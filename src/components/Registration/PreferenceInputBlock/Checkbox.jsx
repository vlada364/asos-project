import React from 'react';
import styles from "../RegistrationForm.module.css";


const Checkbox = ({name, label, clickCheckbox, value}) => {
    return (<div className={styles.inputSelectCategory}>
        <label>{label}</label>
        <input type="checkbox" name={name} className="checkbox-input" value={value ? 'on' : "off"} checked={value}
               onClick={clickCheckbox}/>
    </div>);
}

export default Checkbox;