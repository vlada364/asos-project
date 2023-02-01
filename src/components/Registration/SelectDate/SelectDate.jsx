import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import {days,month,years} from "./utils/constants";
import Tooltip from "../../../common/components/Tooltip";
import stylesTooltip from "../../../common/components/Components.module.css";
import {getAge} from "./utils/utils";

const SelectDate = ({daysState,monthState,yearState,handleChangeDay,handleChangeMonth,handleChangeYear,areDateFieldsValid,wasDateEdited,tooltipText}) => {



    return (<div style={{display: 'flex', justifyContent: 'space-between', position:'relative'}}>
        <select id="day" className={styles.selectBlock} onChange={(e)=>handleChangeDay(e)} name="day" value={daysState}>
            <option value='0'>DD</option>
            {days().map(el => {
                return <option value={el}>{String(el)}</option>
            })}
        </select>
        <select id="month" className={styles.selectBlock} name="month"  onChange={(e)=>handleChangeMonth(e)} value={monthState}>
            <option value='0'>Month</option>
            {month.map(el => {
                return <option value={el}>{el}</option>
            })}
        </select>
        {(areDateFieldsValid && wasDateEdited) && <Tooltip text={tooltipText[0]} className={stylesTooltip.tooltipVisible}/>}
        {(getAge(yearState, monthState, daysState)<16) && <Tooltip text={tooltipText[1]} className={stylesTooltip.tooltipVisible}/>}

        <select id="year" className={styles.selectBlock} name="year" value={yearState} onChange={(e)=>handleChangeYear(e)}>
            <option value="0">YYYY</option>
            {years().map(el => {
                return <option value={el}>{String(el)}</option>
            })}
        </select>
    </div>);
}

export default SelectDate;