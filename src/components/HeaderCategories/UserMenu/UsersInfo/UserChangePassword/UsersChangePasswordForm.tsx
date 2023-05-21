import React, {useState} from 'react';
import stylesForm from "../../../../Registration/RegistrationForm.module.css";
import {changePasswordInputs} from "../../../../Registration/Form/utils/FormInformation";
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import styles from "../MyAccount/MyAccount.module.css";
import ChangesSaved from "../MyAccount/ChangesSaved/ChangesSaved";
import {useSelector} from "react-redux";
import {
    countErrorsAndSetTooltips,
    getTextAndTooltipVisibility,
    isDateValidHelper
} from "../../../../Registration/SelectDate/utils/utils";
import useFormToolsHelper from "../../../../../common/hooks/useFormToolsHelper/useFormToolsHelper";
import {setLoggedInUser} from "../../../../../common/redux/users/actions";
import {useDispatch} from "react-redux";
import UserStoreHelper from "../../../../Registration/SelectDate/utils/UserStoreHelper";
import {useEffect} from "react";

const formInitialState = {
    password: '', newPassword: ''
};

const UsersChangePasswordForm = () => {
    //@ts-ignore
    const {password: userPassword} = useSelector(state => state.users.loggedInUser);
    //@ts-ignore
    const user = useSelector(state => state.users.loggedInUser);

    const {
        setDisabled,

        changeInputValueByName,
        isDisabled,
        inputsValue,
        tooltipsText,
        changeFieldTooltip
    } = useFormToolsHelper(formInitialState, formInitialState);

    const dispatch = useDispatch()

    const [isChangesSaved, setChangesSaved] = useState(false);

    useEffect(() => {
        //
        const formValue = {
            ...inputsValue
        }

        const isTruePassword = userPassword === formValue.password;
        const wasEnteredSamePassword = formValue.password === formValue.newPassword;

        if (isTruePassword && !wasEnteredSamePassword ) {
            setDisabled(false);

        }
        else {
            setDisabled(true);
        }
    }, [inputsValue]);


    function handleChangeInput({target: {name, value}}) {

        changeInputValueByName(name, value);
        console.log(inputsValue);
        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }

    function closeChangeSaved() {
        setChangesSaved(false)
    }


    function handleSubmitPasswordForm(e) {
        e.preventDefault();
        const formValues = Object.fromEntries([...(new FormData(e.target))]);
        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);

        const userTwo = localStorage.getItem('loggedUser')
        const isTruePassword = userPassword === formValues.password;
        const wasEnteredSamePassword = e.target.password === e.target.newPassword;
        const newPassword = formValues.newPassword;

        console.log(newPassword, 'NEW')


        if (isTruePassword && !wasEnteredSamePassword && userTwo) {
            // setDisabled(false)
            setChangesSaved(true);
            setDisabled(false);
            const newUser = {...user, password: newPassword};
            UserStoreHelper.addUser(newUser, () => {
                dispatch(setLoggedInUser(newUser));
            }, () => {
            }, 'put');


        } else if (!isTruePassword) {

            changeFieldTooltip('password', "Invalid current password")
        } else {

            changeFieldTooltip('newPassword', "Wrong new password")
        }
    }

    return (<div className={styles.userDetailsContainer}>
        <div className={styles.userDetailsHeader}>
            <img src='/img/img5.svg'/>
            <h1>CHANGE PASSWORD</h1>
            <p>Feel free to edit any of your details below so your ASOS account is totally up to date. (*
                Indicates a required field).</p>
        </div>
        <div className={stylesForm.registrationForm}>
            <div className={stylesForm.registrationFormTwo} style={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <form id='edit-form-changePassword' className={stylesForm.form} onSubmit={handleSubmitPasswordForm}>
                    {changePasswordInputs.map(el => (<FormTextInput name={el.name} label={el.label} type={el.type}
                                                                    handleChangeInput={handleChangeInput}
                                                                    value={inputsValue[el.name]}
                                                                    tooltipText={tooltipsText[el.name]}
                                                                    hint={el.hint}

                    />))}

                </form>
                <button className={styles.btnStartShopping} disabled={isDisabled} style={isDisabled?{backgroundColor:'#767676'}:{backgroundColor:'#2d2d2d'}}form='edit-form-changePassword'
                        type='submit'>SAVE
                    CHANGES
                </button>
            </div>
        </div>
        {isChangesSaved && <ChangesSaved closeChangeSaved={closeChangeSaved}/>}
    </div>);
}


export default UsersChangePasswordForm;