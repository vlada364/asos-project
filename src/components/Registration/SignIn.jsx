import React, {useState} from 'react';
import styles from "./RegistrationForm.module.css";
import SignUpWith from "./SignUpWith";
import FormTextInput from "./FormTextInput/FormTextInput";
import {countErrorsAndSetTooltips, getTextAndTooltipVisibility} from "./SelectDate/utils/utils";
import userStoreHelper from "./SelectDate/utils/UserStoreHelper";
import WarningMessage from "./SelectDate/WarningMessage";
import {useDispatch} from "react-redux";
import {setLoggedInUser} from "../../common/redux/users/actions";


const textInputSignIn = [
    {
        label: 'EMAIL ADDRESS', name: 'email_address'
    }, {
        label: 'PASSWORD', name: 'password',type:'password'
    }
]
const textWarningMessage = 'Looks like either your email address or password were incorrect. Wanna try again?';
const SignIn = () => {
    const dispatch=useDispatch();

    const [inputsSignInValue, setInputsSignInValue] = useState({
        email_address: '', password: ''
    })
    const [tooltipsText, setTooltipsTextState] = useState({
        email_address: '', password: ''
    })

    const [isWarningMessageShown, setWarningMessage] = useState(false)
    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev,
        [name]: text
    }))

    function handleChangeInput({target: {name, value}}) {
        setInputsSignInValue(prevState => ({...prevState, [name]: value}));
        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }

    function successSubmit(email, password) {
        userStoreHelper.getUser(email, (result) => {
            console.log('УСПЕХ', result)
            const foundPassword = result.password;
            if (foundPassword === password) {
                // мы сохраняем result в глобальный state в redux, теперь мы авторизированы
                dispatch(setLoggedInUser(result));
                localStorage.setItem('loggedUser',result.email_address)
            } else {
                setWarningMessage(true);
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formValues = Object.fromEntries([...(new FormData(e.target))])
        const email = formValues.email_address;
        const password = formValues.password;
        console.log(formValues)
        let errorsCount = countErrorsAndSetTooltips(formValues);
        successSubmit(email, password)
    }

    return (<>{isWarningMessageShown && (<WarningMessage text={textWarningMessage}/>)}
        <div className={styles.registrationForm}>
            <div className={styles.registrationFormTwo}>
                <form id="form-two" className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    {textInputSignIn.map(el => {
                        return (<FormTextInput name={el.name} label={el.label} tooltipText={tooltipsText[el.name]}
                                               value={inputsSignInValue[el.name]} type={el.type}
                                               handleChangeInput={handleChangeInput}/>)

                    })}
                    <div className={styles.btnJoinAsos}>
                        <button type="submit" id="btn-asos"><p>SIGN IN</p></button>
                    </div>
                </form>
                  <div className={styles.littleNoteSignIn}><p>Forgot password?</p></div>
            </div>
        </div>
        <SignUpWith/>
    </>);
}

export default SignIn;