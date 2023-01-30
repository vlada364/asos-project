import React from 'react';
import styles from "../RegistrationForm.module.css";


const FormTextInput = ({name,id,hint}) => {
    return <div className={styles.formTextInput}>
        <label className={styles.nameLabel}> {name}</label>
        <div id="tooltip"></div>
        <input id={id} className={styles.formInput}  type="text"/>
        {hint&&<div className={styles.littleNote}><p>{hint}</p></div>}
    </div>;
}

export default FormTextInput;