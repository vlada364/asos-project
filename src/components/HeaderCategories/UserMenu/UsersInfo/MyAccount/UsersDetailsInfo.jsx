import React from 'react';
import styles from './MyAccount.module.css'
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import {textInput, tooltipText} from "../../../../Registration/Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import stylesForm from '../../../../Registration/RegistrationForm.module.css'
import SelectDate from "../../../../Registration/SelectDate/SelectDate";
import GenderCategoryInput from "../../../../Registration/PreferenceInputBlock/GenderCategoryInput";
import {getTextAndTooltipVisibility, isDateValidHelper} from "../../../../Registration/SelectDate/utils/utils";
import {
    countErrorsAndSetTooltips,
    getAge,
    giveBirth,
    isDateValid
} from "../../../../Registration/SelectDate/utils/utils";
import UserStoreHelper from "../../../../Registration/SelectDate/utils/UserStoreHelper";
import {setLoggedInUser} from "../../../../../common/redux/users/actions";
import ChangesSaved from "./ChangesSaved/ChangesSaved";
import {useLocation} from "react-router";
import UserDetailsForm from "./UserDetailsForm";


const UsersDetailsInfo = () => {
    const local=useLocation()
    const localDetails=local.pathname.includes('details')
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    const [isDisabled, setDisabled] = useState(false);
    const dispatch = useDispatch()

    const [isChangesSaved,setChangesSaved]=useState(false)

    const [inputsValue, setInputStateValue] = useState({
        email_address: loggedInSer.email_address, first_name: loggedInSer.first_name, last_name: loggedInSer.last_name
    });
    const [tooltipsText, setTooltipsTextState] = useState({
        email_address: '', first_name: '', last_name: '', password: '', date: ''
    })
    const [gender, setGender] = useState(loggedInSer.gender);

    const [daysState, setDaysState] = useState(loggedInSer.day);
    const [monthState, setMonthState] = useState(loggedInSer.month);
    const [yearState, setYearState] = useState(loggedInSer.year);
    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev,
        [name]: text
    }))

    function handleChangeInput({target: {name, value}}) {

        setInputStateValue(prevState => ({...prevState, [name]: value}));
        console.log(inputsValue);
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
        const isDateValid = isDateValidHelper(daysState, monthState, yearState);

        const {isAgeBelow16, isDateValidErr, wasDateEdited} = isDateValid(name, value);
        setDateTooltip(isDateValidErr, isAgeBelow16, wasDateEdited)
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

    function onSuccessSubmit(value) {

        const email = localStorage.getItem('loggedUser');
        UserStoreHelper.getUser(email, (result) => {

            const updatedUser={...result, ...value};
            UserStoreHelper.addUser({...result, ...value}, () => {

                dispatch(setLoggedInUser(updatedUser));
            }, () => {

            }, 'put')

            localStorage.setItem('loggedUser', value.email_address);

        }, () => {
            console.log('ERRORRR')
            changeFieldTooltip('email_address', "This email is already exists")

        })
    }
    function checkPreferences(e) {
        setGender(e.target.value);
    }

    function closeChangeSaved(){
        setChangesSaved(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formValues = Object.fromEntries([...(new FormData(e.target))]);

        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);

        const {isDateValidErr, isAgeBelow16, wasNotDateEdited} = isDateValidHelper();


        if (isDateValidErr || isAgeBelow16 || wasNotDateEdited) {
            errorsCount += 1;
        }
        setDateTooltip(isDateValidErr, isAgeBelow16, wasNotDateEdited)
        console.log('errors', errorsCount)
        if (errorsCount === 0) {
            //submit tyt
            onSuccessSubmit(formValues);
            setDisabled(false)
            setChangesSaved(true)
        }
    }

    return <div className={styles.userDetailsContainer}>
        <div className={styles.userDetailsHeader}>
            <img src='/img/img4.svg'/>
            <h1>MY DETAILS</h1>
            <p>Feel free to edit any of your details below so your ASOS account is totally up to date. (* Indicates a
                required field).</p>
        </div>
        {localDetails&& <UserDetailsForm daysState={daysState} monthState={monthState} yearState={yearState} handleChangeDate={handleChangeDate}
                                         handleChangeInput={handleChangeInput}
                                         handleSubmit={handleSubmit}
                                         tooltipsText={tooltipsText}
                                         isDisabled={isDisabled} checkPreferences={checkPreferences} gender={gender} inputsValue={inputsValue}
        />}
        {isChangesSaved&&<ChangesSaved closeChangeSaved={closeChangeSaved}/>}
    </div>;
}

export default UsersDetailsInfo;