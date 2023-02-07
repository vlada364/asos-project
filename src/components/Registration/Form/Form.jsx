import React, {useEffect, useRef, useState} from 'react';
import styles from "../RegistrationForm.module.css";
import FormTextInput from "../FormTextInput/FormTextInput";
import SelectDate from "../SelectDate/SelectDate";
import PreferenceInputBlock from "../PreferenceInputBlock/PreferenceInputBlock";
import GenderCategoryInput from "../PreferenceInputBlock/GenderCategoryInput";
import {getAge, getTextAndTooltipVisibility, isDateValid} from "../SelectDate/utils/utils";
import {da} from "date-fns/locale";


const textInput = [{
    label: 'EMAIL ADDRESS:', name: 'email_address', hint: `We'll send your order confirmation here`
}, {
    label: 'FIRST NAME:', name: 'first_name'
}, {
    label: 'LAST NAME:', name: 'last_name'
}, {
    label: 'PASSWORD:', name: 'password', hint: 'Must be 10 or more characters'
}]

export const interestedIn = [{name: 'Womenswear', value: 'woman'}, {name: 'Menswear', value: 'man'}]
export const tooltipText = [`That doesn\'t look right.Add your date of birth to get a birthday treat!`, `Oops. Looks like you're too young to use ASOS.`, 'Email fail! Please type in your correct email address', 'First name must not contain <, >, &, " or .', 'Last name must not contain <, >, &, " or .', 'Erm, you need 10 or more characters'];

const Form = () => {
    const [daysState, setDaysState] = useState('');
    const [monthState, setMonthState] = useState('');
    const [yearState, setYearState] = useState('');


    const [inputsValue, setInputStateValue] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    });

    const [tooltipsText, setTooltipsTextState] = useState({
        email_address: '', first_name: '', last_name: '', password: '', date: ''
    })

    const [gender, setGender] = useState('woman');


    function handleChangeInput({target: {name, value}}) {
        setInputStateValue(prevState => ({...prevState, [name]: value}));
        console.log(inputsValue);
        const text = getTextAndTooltipVisibility(name, value);
        setTooltipsTextState((prev) => ({...prev, [name]: text}));
    }

    const isDateValidHelper = (name, value) => {

        let day = daysState, month = monthState, year = yearState;
        if (name === 'day') {
            day = value;
        } else if (name === 'month') {
            month = value;
        } else if (name === 'year') {
            year = value;
        }
        const isDateValidField = isDateValid(year, month, day);
        const areDateFieldsValid = !isDateValidField || !year || !month || !day;
        const wasDateEdited = year === '' && month === '' && day === '';
        const isDateValidErr = areDateFieldsValid;
        const isAgeBelow16 = getAge(year, month, day) < 16;
        return {isDateValidErr, isAgeBelow16, wasDateEdited}

    }

    function handleChangeDate({target: {name, value}}) {
        if (name === 'day') {
            setDaysState(value);
        } else if (name === 'month') {
            setMonthState(value)
        } else if (name === 'year') {
            setYearState(value)
        }


        const {isAgeBelow16, isDateValidErr, wasDateEdited} = isDateValidHelper(name, value);
        setDateTooltip(isDateValidErr, isAgeBelow16, wasDateEdited)
    }


    function checkPreferences(e) {
        setGender(e.target.value);
    }

    function setDateTooltip(isDateValidErr, isAgeBelow16, wasDateEdited) {
        let text = '';
        if (wasDateEdited) {
            text = 'Enter your full date of birth'
        } else if (isDateValidErr) {
            text = tooltipText[0];
        } else if (isAgeBelow16) {
            text = tooltipText[1];
        } else if (wasDateEdited) {
            text = 'Enter your full date of birth'
        }
        setTooltipsTextState((prev) => ({...prev, date: text}))

    }

    function countErrorsAndSetTooltips(formElement) {
        const formValues = Object.fromEntries([...(new FormData(formElement))]);

        let errorsCount = 0;
        for (const key in formValues) {
            console.log(key)
            const value = formValues[key];
            const text = getTextAndTooltipVisibility(key, value);
            if (text === '') {
                errorsCount += 1;
            }
            setTooltipsTextState((prev) => ({...prev, [key]: text}))
        }
        return errorsCount;
    }

    function onSuccessSubmit() {

    }

    function handleSubmit(e) {
        e.preventDefault()
        let errorsCount = countErrorsAndSetTooltips(e.target);
        console.log(tooltipsText)
        const {isDateValidErr, isAgeBelow16, wasDateEdited} = isDateValidHelper();
        if (isDateValidErr || isAgeBelow16 || !wasDateEdited) {
            errorsCount += 1;
        }
        setDateTooltip(isDateValidErr, isAgeBelow16, wasDateEdited)
        // проверить,что нет ошибок
        if (errorsCount === 0) {
            //submit tyt
            onSuccessSubmit();
        }

    }

    return (<form id="form" className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        {textInput.map(el => {
            return (<FormTextInput name={el.name} label={el.label} hint={el.hint}
                                   inputStateValue={inputsValue}
                                   handleChangeInput={handleChangeInput}
                                   value={inputsValue[el.name]}
                                   tooltipText={tooltipsText[el.name]}
            />);
        })}
        <SelectDate daysState={daysState} monthState={monthState} yearState={yearState}
                    handleChangeDate={handleChangeDate}
                    errorTooltipText={tooltipsText.date}

        />
        <div className={styles.littleNote}><p className="text-gray-400">You need to be 16 or over to use ASOS</p>
        </div>
        <GenderCategoryInput checkPreferences={checkPreferences} selectedValue={gender}/>
        <PreferenceInputBlock/>
        <div className={styles.btnJoinAsos}>
            <button type="submit" id="btn-asos"><p>JOIN ASOS</p></button>
        </div>
    </form>);
}

export default Form;