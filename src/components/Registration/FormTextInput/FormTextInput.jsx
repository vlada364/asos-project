import React from 'react';
import styles from "../RegistrationForm.module.css";
import Tooltip from "../../../common/components/Tooltip";
import stylesTooltip from "../../../common/components/Components.module.css";


const FormTextInput = ({label, id, hint, value, handleChangeInput, name, tooltipText,type}) => {
    return <div className={styles.formTextInput + ' ' + `${name}`} >
        <div style={{position: 'relative',display:'flex',flexDirection:'column',gap:'4px'}}>
        {(tooltipText) && <Tooltip text={tooltipText} className={stylesTooltip.tooltipVisible}/>}
        <label className={styles.nameLabel}> {label}</label>
        <div id="tooltip"></div>
        <input id={id} className={styles.formInput} name={name} type={type} value={value}
               onChange={(e) => handleChangeInput(e)}/>
        </div>
        {hint && <div className={styles.littleNote}><p>{hint}</p></div>}
    </div>;
}

export default FormTextInput;