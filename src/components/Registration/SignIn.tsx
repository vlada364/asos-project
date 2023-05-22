import React, {useState} from 'react';
import styles from "./RegistrationForm.module.css";
import SignUpWith from "./SignUpWith";
import FormTextInput from "./FormTextInput/FormTextInput";
import {countErrorsAndSetTooltips, getTextAndTooltipVisibility} from "./SelectDate/utils/utils";
import userStoreHelper from "./SelectDate/utils/UserStoreHelper";
import WarningMessage from "./SelectDate/WarningMessage";
import {useDispatch} from "react-redux";
import {setLoggedInUser} from "../../common/redux/users/actions";
import {textWarningMessage, textInputSignIn} from './SignIn/SignInConst/SignInConst'
import {EmailAndPassword} from "./SignIn/types/SignIn";


const SignIn = () => {
    const dispatch=useDispatch();

    const [inputsSignInValue, setInputsSignInValue] = useState<EmailAndPassword>({
        email_address: '', password: ''
    })
    const [tooltipsText, setTooltipsTextState] = useState<EmailAndPassword>({
        email_address: '', password: ''
    })

    const [isWarningMessageShown, setWarningMessage] = useState<boolean>(false)
    const changeFieldTooltip = (name:string, text:string) => setTooltipsTextState((prev) => ({
        ...prev,
        [name]: text
    }))

    const handleChangeInput:React.ChangeEventHandler<HTMLInputElement>=({target: {name, value}})=>{
        setInputsSignInValue(prevState => ({...prevState, [name]: value}));
        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }

    function successSubmit(email:string, password:string) {
        userStoreHelper.getUser(email, (result) => {

            const foundPassword = result.password;

            if (foundPassword === password) {
                dispatch(setLoggedInUser(result));
                localStorage.setItem('loggedUser',result.email_address)
            } else {
                setWarningMessage(true);
            }
        })
    }

    function handleSubmit(e:React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const formData = new FormData(target);
        const formValues: { [key: string]: any } = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        const email = formValues.email_address;

        const password = formValues.password;

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