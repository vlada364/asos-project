import React from 'react';
import styles from "../RegistrationForm.module.css";
import {NameAndLabel} from "../Form/utils/FormInformation";
import {MouseEvent} from "react";

type ClickCheckbox = {
    clickCheckbox: (e: React.MouseEvent<HTMLInputElement>) => void
}

type Value = {
    value?: boolean
}
const Checkbox = ({name, label, clickCheckbox, value}: NameAndLabel & Value & ClickCheckbox) => {
    return (<div className={styles.inputSelectCategory}>
        <label>{label}</label>
        <input type="checkbox" name={name} className="checkbox-input" value={value ? 'on' : "off"} checked={value}
               onClick={clickCheckbox}/>
    </div>);
}

export default Checkbox;