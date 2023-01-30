import React from 'react';
import styles from "../RegistrationForm.module.css";



const Checkbox = ({name}) => {
    return (<div className={styles.inputSelectCategory}>
        <label>{name}</label>
        <input type="checkbox" className="checkbox-input"/>
    </div>);
}

export default Checkbox;