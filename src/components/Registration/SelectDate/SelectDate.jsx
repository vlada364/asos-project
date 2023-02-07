import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import {days,month,years} from "./utils/constants";
import Tooltip from "../../../common/components/Tooltip";
import stylesTooltip from "../../../common/components/Components.module.css";
import {getAge} from "./utils/utils";
import {tooltipText} from "../Form/Form";

const SelectDate = ({daysState,monthState,yearState,handleChangeDate,errorTooltipText}) => {



    return (<div style={{display: 'flex', justifyContent: 'space-between', position:'relative'}}>
        <select id="day" className={styles.selectBlock} onChange={handleChangeDate} name="day" value={daysState}>
            <option value='0'>DD</option>
            {days().map(el => {
                return <option value={el}>{String(el)}</option>
            })}
        </select>
        <select id="month" className={styles.selectBlock} name="month"  onChange={handleChangeDate} value={monthState}>
            <option value='0'>Month</option>
            {month.map(el => {
                return <option value={el}>{el}</option>
            })}
        </select>
        {errorTooltipText &&<Tooltip text={errorTooltipText} className={stylesTooltip.tooltipVisible}/>}

        <select id="year" className={styles.selectBlock} name="year" value={yearState} onChange={handleChangeDate}>
            <option value="0">YYYY</option>
            {years().map(el => {
                return <option value={el}>{String(el)}</option>
            })}
        </select>
    </div>);
}

export default SelectDate;