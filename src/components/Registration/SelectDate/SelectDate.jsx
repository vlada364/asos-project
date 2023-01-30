import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import {days,month,years} from "./utils/constants";

const SelectDate = ({daysState,monthState,yearState,handleChangeDay,handleChangeMonth,handleChangeYear}) => {



    return (<div style={{display: 'flex', justifyContent: 'space-between'}}>
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
        <select id="year" className={styles.selectBlock} name="year" value={yearState} onChange={(e)=>handleChangeYear(e)}>
            <option value="0">YYYY</option>
            {years().map(el => {
                return <option value={el}>{String(el)}</option>
            })}
        </select>
    </div>);
}

export default SelectDate;