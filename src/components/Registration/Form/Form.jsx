import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import FormTextInput from "../FormTextInput/FormTextInput";
import SelectDate from "../SelectDate/SelectDate";
import PreferenceInputBlock from "../PreferenceInputBlock/PreferenceInputBlock";
import GenderCategoryInput from "../PreferenceInputBlock/GenderCategoryInput";
import {getTextAndTooltipVisibility, isDateValid} from "../SelectDate/utils/utils";


const textInput = [{
    label: 'EMAIL ADDRESS:', name: 'email_address', hint: `We'll send your order confirmation here`
}, {
    label: 'FIRST NAME:', name: 'first_name'
}, {
    label: 'LAST NAME:', name: 'last_name'
}, {
    label: 'PASSWORD:', name: 'password', hint: 'Must be 10 or more characters'
}]

export const tooltipText = [`That doesn\'t look right.Add your date of birth to get a birthday treat!`, `Oops. Looks like you're too young to use ASOS.`, 'Email fail! Please type in your correct email address', 'First name must not contain <, >, &, " or .', 'Erm, you need 10 or more characters'];

const Form = () => {
    const [daysState, setDaysState] = useState('');
    const [monthState, setMonthState] = useState('');
    const [yearState, setYearState] = useState('');

    const [inputsValue, setInputStateValue] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    })

    function handleChangeInput(e) {
        setInputStateValue(prevState => ({...prevState, [e.target.name]: e.target.value}));
        console.log(inputsValue)
    }

    function handleChangeDay(e) {
        setDaysState(e.target.value);

    }

    function handleChangeMonth(e) {
        setMonthState(e.target.value);

    }

    function handleChangeYear(e) {
        setYearState(e.target.value);
    }

    const isValid = isDateValid(yearState, monthState, daysState);
    const areDateFieldsValid = !isValid || !yearState || !monthState || !daysState;
    const wasDateEdited = yearState !== '' && monthState !== '' && daysState !== '';


    return (<form id="form" className={styles.form}>
        {textInput.map(el => {
            const {isShown, text} = getTextAndTooltipVisibility(el.name, inputsValue[el.name]);
            return (<FormTextInput name={el.name} label={el.label} hint={el.hint}
                                   inputStateValue={inputsValue}
                                   handleChangeInput={handleChangeInput}
                                   value={inputsValue[el.name]}
                                   isTooltipShown={isShown}
                                   tooltipText={text}
            />);
        })}
        <SelectDate daysState={daysState} monthState={monthState} yearState={yearState}
                    handleChangeDay={handleChangeDay}
                    handleChangeMonth={handleChangeMonth}
                    handleChangeYear={handleChangeYear}
                    areDateFieldsValid={areDateFieldsValid}
                    wasDateEdited={wasDateEdited}
                    tooltipText={tooltipText}

        />
        <div className={styles.littleNote}><p className="text-gray-400">You need to be 16 or over to use ASOS</p>
        </div>
        <GenderCategoryInput/>
        <PreferenceInputBlock/>
        <div className={styles.btnJoinAsos}>
            <button type="button" id="btn-asos"><p>JOIN ASOS</p></button>
        </div>
    </form>);
}

export default Form;