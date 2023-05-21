import React from 'react';
import styles from "../RegistrationForm.module.css";
import PreferencesCheckboxes from "./PreferencesCheckboxes";
import {FunctionCheckBox,PreferenceCheck,IsClear,OnClickEvent} from './types/PreferenceInputBlockTypes'



export type InputBlock=FunctionCheckBox & PreferenceCheck & IsClear & OnClickEvent


const PreferenceInputBlock = ({clickCheckBox,preferenceCheckState,isClearAll,onClickSelectClear}:InputBlock) => {


    return <div>
        <div className={styles.contactPreferences}>
            <div className="justify-start flex flex-col">
                <div className={styles.contactPreferencesText}>
                    <p>CONTACT PREFERENCES</p>
                </div>
                <div className={styles.littleNote}>
                    <p>Tell us which emails you’d like:</p>
                </div>
            </div>
            <div>
                <button type="button" className={styles.selectAllBtn}
                        onClick={onClickSelectClear}>{isClearAll ? "Clear all" : "Select all"}</button>
            </div>
        </div>
        <PreferencesCheckboxes clickCheckBox={clickCheckBox} checkboxesState={preferenceCheckState} />
    </div>;
}

export default PreferenceInputBlock;