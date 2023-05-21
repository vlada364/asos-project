import React, {useEffect, useState} from 'react';
import styles from '../MyAccount/MyAccount.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    countErrorsAndSetTooltips,
    getTextAndTooltipVisibility,
    isDateValidHelper
} from "../../../../Registration/SelectDate/utils/utils";
import UserStoreHelper from "../../../../Registration/SelectDate/utils/UserStoreHelper";
import {setLoggedInUser} from "../../../../../common/redux/users/actions";
import ChangesSaved from "../MyAccount/ChangesSaved/ChangesSaved";
import UserDetailsForm from "./UserDetailsForm";
import useFormToolsHelper from "../../../../../common/hooks/useFormToolsHelper/useFormToolsHelper";
import useHandleBirthday from "../../../../../common/hooks/useHandleBirthday/useHandleBirthday";


const UsersDetailsInfo = () => {
    //@ts-ignore
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    const dispatch = useDispatch();
    const [isChangesSaved, setChangesSaved] = useState(false);

    const {
        changeFieldTooltip,
        changeInputValueByName,
        tooltipsText,
        inputsValue,
        isDisabled,
        setDisabled
    } = useFormToolsHelper({
        email_address: loggedInSer.email_address,
        first_name: loggedInSer.first_name,
        last_name: loggedInSer.last_name,
        password: loggedInSer.password
    }, {
        email_address: '', first_name: '', last_name: '', password: ''
    });


    const {
        dateTooltip,
        handleChangeDate,
        setDateTooltip,
        yearState,
        monthState,
        daysState
    } = useHandleBirthday({day: loggedInSer.day, month: loggedInSer.month, year: loggedInSer.year}, '');

    const [gender, setGender] = useState(loggedInSer.gender);

    function handleChangeInput({target: {name, value}}) {
        changeInputValueByName(name, value);
        console.log(inputsValue);
        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }
//@ts-ignore
    function onSuccessSubmit(value) {

        const email = localStorage.getItem('loggedUser');
        UserStoreHelper.getUser(email, (result) => {

            const updatedUser = {...result, ...value};
            UserStoreHelper.addUser({...result, ...value}, () => {

                dispatch(setLoggedInUser(updatedUser));
            }, () => {

            }, 'put')

            localStorage.setItem('loggedUser', value.email_address);

        }, () => {
            changeFieldTooltip('email_address', "This email is already exists")
        })
    }

    useEffect(() => {
        //
        const formValue = {
            ...inputsValue,
            day: daysState,
            month: monthState,
            year: yearState
        }
        let errors = countErrorsAndSetTooltips(formValue);
        const {isDateValidErr, isAgeBelow16, wasNotDateEdited} = isDateValidHelper(daysState, monthState, yearState)();


        if (isDateValidErr || isAgeBelow16 || wasNotDateEdited) {
            errors += 1;
        }
        if (errors > 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [inputsValue, daysState, monthState, yearState]);

    function checkPreferences(e) {
        setGender(e.target.value);
    }

    function closeChangeSaved() {
        setChangesSaved(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formValues = Object.fromEntries([...(new FormData(e.target))]);

        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);

        const {isDateValidErr, isAgeBelow16, wasNotDateEdited} = isDateValidHelper(daysState, monthState, yearState)();


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
        <UserDetailsForm daysState={daysState} monthState={monthState} yearState={yearState}
                         handleChangeDate={handleChangeDate}
                         handleChangeInput={handleChangeInput}
                         handleSubmit={handleSubmit}
                         tooltipsText={tooltipsText}
                         isDisabled={isDisabled} checkPreferences={checkPreferences} gender={gender}
                         inputsValue={inputsValue}
                         dateTooltip={dateTooltip}
        />

        {isChangesSaved && <ChangesSaved closeChangeSaved={closeChangeSaved}/>}
    </div>;
}

export default UsersDetailsInfo;