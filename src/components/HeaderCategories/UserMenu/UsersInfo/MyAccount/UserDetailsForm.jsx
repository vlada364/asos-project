import React from 'react';
import styles from './MyAccount.module.css'
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import {textInput, tooltipText} from "../../../../Registration/Form/Form";
import stylesForm from '../../../../Registration/RegistrationForm.module.css';
import SelectDate from "../../../../Registration/SelectDate/SelectDate";
import GenderCategoryInput from "../../../../Registration/PreferenceInputBlock/GenderCategoryInput";


const UserDetailsForm = ({handleSubmit,inputsValue,handleChangeInput,tooltipsText,daysState,monthState,yearState,handleChangeDate,gender,checkPreferences,isDisabled})=> {
    return (<div className={stylesForm.registrationForm}>
        <div className={stylesForm.registrationFormTwo}>
            <form id='edit-form' className={stylesForm.form} onSubmit={handleSubmit}>
                {textInput.filter(elem => elem.name != 'password').map(el => {
                    return (<FormTextInput name={el.name} label={el.label} type={el.type}
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
                <GenderCategoryInput selectedValue={gender} checkPreferences={checkPreferences}/>
            </form>
            <button className={styles.btnStartShopping} disabled={isDisabled} form='edit-form' type='submit'>SAVE
                CHANGES
            </button>

        </div>
    </div>);
}

export default UserDetailsForm;