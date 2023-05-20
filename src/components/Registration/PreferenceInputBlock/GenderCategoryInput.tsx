import React from 'react';
import styles from "../RegistrationForm.module.css";
import InputPreferenceIn from "./InputPreferenceIn";
import {interestedIn} from "../Form/utils/FormInformation";
import {MouseEventType} from "./InputPreferenceIn";

export type SelectedValue={
    selectedValue:string
}
const GenderCategoryInput = ({checkPreferences,selectedValue}:MouseEventType&SelectedValue) => {
    return (
        <div>
            <div className={styles.nameLabel}>
                <p>MOSTLY INTERESTED IN:</p>
            </div>
            {interestedIn.map(el => <div className={styles.selectCategory}>
                <InputPreferenceIn name={'gender'} label={el.name} value={el.value} checked={selectedValue===el.value}
                                   checkPreferences={checkPreferences}/>
            </div>)}
            <div className={styles.selectCategory}>
            </div>
        </div>
    )
}

export default GenderCategoryInput