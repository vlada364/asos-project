import React from 'react';
import styles from "../RegistrationForm.module.css";
import Tooltip from "../../../common/components/Tooltip";
import stylesTooltip from "../../../common/components/Components.module.css";
import {LabelNameHintAndType, Value} from "../Form/utils/FormInformation";

import {ChangeEvent} from "react";


export type TooltipText={tooltipText:string}

export type Id={
    id?:string
}

export type ChangeInput={handleChangeInput:(e:ChangeEvent<HTMLInputElement>)=>void}

export type FormTextInput = LabelNameHintAndType & Value & TooltipText & Id & ChangeInput ;
const FormTextInput = ({label, id, hint, value, handleChangeInput, name, tooltipText, type}:FormTextInput) => {
    return <div className={styles.formTextInput + ' ' + `${name}`}>
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px'}}>
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