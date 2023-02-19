import React, {useEffect, useRef, useState} from 'react';
import styles from "../RegistrationForm.module.css";
import FormTextInput from "../FormTextInput/FormTextInput";
import SelectDate from "../SelectDate/SelectDate";
import PreferenceInputBlock from "../PreferenceInputBlock/PreferenceInputBlock";
import GenderCategoryInput from "../PreferenceInputBlock/GenderCategoryInput";
import {
    countErrorsAndSetTooltips,
    getAge,
    getTextAndTooltipVisibility,
    giveBirth,
    isDateValid, isDateValidHelper
} from "../SelectDate/utils/utils";
import {da} from "date-fns/locale";
import UserStoreHelper from "../SelectDate/utils/UserStoreHelper";
import {useSelector, useDispatch} from "react-redux";
import {setLoggedInUser} from "../../../common/redux/users/actions";


export const textInput = [{
    label: 'EMAIL ADDRESS:', name: 'email_address', hint: `We'll send your order confirmation here`, type: 'text'
}, {
    label: 'FIRST NAME:', name: 'first_name', type: 'text'
}, {
    label: 'LAST NAME:', name: 'last_name', type: 'text'
}, {
    label: 'PASSWORD:', name: 'password', hint: 'Must be 10 or more characters', type: 'password'
}]


export const interestedIn = [{name: 'Womenswear', value: 'woman'}, {name: 'Menswear', value: 'man'}]
export const tooltipText = [`That doesn\'t look right.Add your date of birth to get a birthday treat!`, `Oops. Looks like you're too young to use ASOS.`, 'Email fail! Please type in your correct email address', 'First name must not contain <, >, &, " or .', 'Last name must not contain <, >, &, " or .', 'Erm, you need 10 or more characters'];

const Form = () => {
    const [daysState, setDaysState] = useState('');
    const [monthState, setMonthState] = useState('');
    const [yearState, setYearState] = useState('');
    const usersState = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log('REDUX STATE', usersState);
    const [inputsValue, setInputStateValue] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    });

    const [tooltipsText, setTooltipsTextState] = useState({
        email_address: '', first_name: '', last_name: '', password: '', date: ''
    })

    const [gender, setGender] = useState('woman');


    function handleChangeInput({target: {name, value}}) {
        setInputStateValue(prevState => ({...prevState, [name]: value}));

        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }


    function handleChangeDate({target: {name, value}}) {
        if (name === 'day') {
            setDaysState(value);
        } else if (name === 'month') {
            setMonthState(value)
        } else if (name === 'year') {
            setYearState(value)
        }
        const isDateValid = isDateValidHelper(daysState, monthState, yearState)

        const {isAgeBelow16, isDateValidErr, wasDateEdited} = isDateValid(name, value);
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
        changeFieldTooltip('date', text);
    }


    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev,
        [name]: text
    }))


    function onSuccessSubmit(value) {
        UserStoreHelper.addUser(value, () => {
            // что-то , когда удача
            dispatch(setLoggedInUser(value));
            localStorage.setItem('loggedUser', value.email_address);
            console.log('REGISTERED', value);
        }, () => {
            changeFieldTooltip('email_address', "This email is already exists")

        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formValues = Object.fromEntries([...(new FormData(e.target))]);

        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);
        console.log(tooltipsText)
        const {isDateValidErr, isAgeBelow16, wasNotDateEdited} = isDateValidHelper();
        console.log('errcount111', errorsCount, isDateValidErr, isAgeBelow16, !wasNotDateEdited)

        if (isDateValidErr || isAgeBelow16 || wasNotDateEdited) {
            errorsCount += 1;
        }
        setDateTooltip(isDateValidErr, isAgeBelow16, wasNotDateEdited)
        // проверить,что нет ошибок
        console.log('errcount', errorsCount)
        if (errorsCount === 0) {
            //submit tyt
            onSuccessSubmit(formValues);
        }

    }

    return (<form id="form" className={styles.form} onSubmit={handleSubmit}>
        {textInput.map(el => {
            return (<FormTextInput name={el.name} label={el.label} hint={el.hint} type={el.type}
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