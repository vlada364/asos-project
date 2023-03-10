import React from 'react';
import styles from '../MyAccount/MyAccount.module.css'
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import {registrationFormInputs, tooltipText, userDetailsFormInputs} from "../../../../Registration/Form/Form";
import stylesForm from '../../../../Registration/RegistrationForm.module.css';
import SelectDate from "../../../../Registration/SelectDate/SelectDate";
import GenderCategoryInput from "../../../../Registration/PreferenceInputBlock/GenderCategoryInput";


const UserDetailsForm = ({
                             handleSubmit,
                             inputsValue,
                             handleChangeInput,
                             tooltipsText,
                             daysState,
                             monthState,
                             yearState,
                             handleChangeDate,
                             gender,
                             checkPreferences,
                             isDisabled, dateTooltip
                         }) => {
    return (<div className={stylesForm.registrationForm}>
        <div className={stylesForm.registrationFormTwo}>
            <form id='edit-form' className={stylesForm.form} onSubmit={handleSubmit}>
                {userDetailsFormInputs.map(el => {
                    return (<FormTextInput name={el.name} label={el.label} type={el.type}
                                           inputStateValue={inputsValue}
                                           handleChangeInput={handleChangeInput}
                                           value={inputsValue[el.name]}
                                           tooltipText={tooltipsText[el.name]}


                    />);
                })}
                <SelectDate daysState={daysState} monthState={monthState} yearState={yearState}
                            handleChangeDate={handleChangeDate}
                            errorTooltipText={dateTooltip}
                />
                <GenderCategoryInput selectedValue={gender} checkPreferences={checkPreferences}/>
            </form>
            <button className={styles.btnStartShopping} disabled={isDisabled}  style={isDisabled?{backgroundColor:'#767676'}:{backgroundColor:'#2d2d2d'}} form='edit-form' type='submit'>SAVE
                CHANGES
            </button>

        </div>
    </div>);
}

export default UserDetailsForm;