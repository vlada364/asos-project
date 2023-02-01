import React from 'react';
import styles from "../RegistrationForm.module.css";
import Tooltip from "../../../common/components/Tooltip";
import stylesTooltip from "../../../common/components/Components.module.css";


const FormTextInput = ({label, id, hint, value, handleChangeInput, name,isTooltipShown,tooltipText}) => {
    return <div className={styles.formTextInput + ' '+`${name}`} style={{position:'relative'}}>
        <label className={styles.nameLabel}> {label}</label>
        <div id="tooltip"></div>
        <input id={id} className={styles.formInput} name={name} type="text" value={value} onChange={(e) => handleChangeInput(e)}/>
        {(isTooltipShown) && <Tooltip text={tooltipText} className={stylesTooltip.tooltipVisible} />}
        {/*{(!isFirstNameValid && name==='first_name'&& value!='')&&<Tooltip text={tooltipText[3]} className={stylesTooltip.tooltipVisible}/>}*/}
        {/*{(!isLastNameValid && name==='last_name'&& value!='')&&<Tooltip text={tooltipText[3]} className={stylesTooltip.tooltipVisible}/>}*/}
        {/*{(!isPasswordValid && name==='password'&& value!='')&&<Tooltip text={tooltipText[4]} className={stylesTooltip.tooltipVisible}/>}*/}
        {hint && <div className={styles.littleNote}><p>{hint}</p></div>}
    </div>;
}

export default FormTextInput;