import React from 'react';
import styles from "../RegistrationForm.module.css";
import {NameAndLabel} from "../Form/utils/FormInformation";
import {MouseEvent} from "react";

export type ClickCheckbox = {
    clickCheckBox: (e: React.MouseEvent<HTMLInputElement>) => void
}

export type Value = {
    value?: boolean
}
const Checkbox = ({name, label, clickCheckBox, value}: NameAndLabel & Value & ClickCheckbox) => {
    return (<div className={styles.inputSelectCategory}>
        <label>{label}</label>
        <input type="checkbox" name={name} className="checkbox-input" value={value ? 'on' : "off"} checked={value}
               onClick={clickCheckBox}/>
    </div>);
}

export default Checkbox;