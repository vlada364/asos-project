import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import FormTextInput from "../FormTextInput/FormTextInput";
import SelectDate from "../SelectDate/SelectDate";
import PreferenceInputBlock from "../PreferenceInputBlock/PreferenceInputBlock";
import GenderCategoryInput from "../PreferenceInputBlock/GenderCategoryInput";


const textInput = [
    {
        name: 'EMAIL ADDRESS:',
        id: 'email_address',
        hint:`We'll send your order confirmation here`
    },
    {
        name: 'FIRST NAME:',
        id: 'first_name'
    }, {
        name: 'LAST NAME:',
        id: 'last_name'
    }, {
        name: 'PASSWORD:',
        id: 'password',
        hint:'Must be 10 or more characters'
    }
]


const Form = () => {
    const [daysState, setDaysState] = useState('');

    const [monthState, setMonthState] = useState('');

    const [yearState, setYearState] = useState('');

    function handleChangeDay(e) {
        setDaysState(e.target.value)

    }

    function handleChangeMonth(e) {
        setMonthState(e.target.value)
    }

    function handleChangeYear(e) {
        setYearState(e.target.value)
    }
    return (
        <form id="form" className={styles.form}>
            {textInput.map(el => (<FormTextInput id={el.id} name={el.name} hint={el.hint}/>))}
            <SelectDate daysState={daysState} monthState={monthState} yearState={yearState}
                        handleChangeDay={handleChangeDay}
                        handleChangeMonth={handleChangeMonth}
                        handleChangeYear={handleChangeYear}
            />
            <div className={styles.littleNote}><p className="text-gray-400">You need to be 16 or over to use ASOS</p>
            </div>
           <GenderCategoryInput/>
            <PreferenceInputBlock/>
            <div className={styles.btnJoinAsos}>
                <button type="button" id="btn-asos"><p>JOIN ASOS</p></button>
            </div>
        </form>
    );
}

export default Form;