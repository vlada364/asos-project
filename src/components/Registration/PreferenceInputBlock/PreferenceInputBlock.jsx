import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import PreferencesCheckboxes from "./PreferencesCheckboxes";
import {checkboxList} from "./PreferencesCheckboxes";


const getSelectedAllCheckboxes = () => Object.fromEntries(checkboxList.map(el => [el.name, true]));

const getInitCheckboxesState = () => Object.fromEntries(checkboxList.map(el => [el.name, false]));
const PreferenceInputBlock = () => {
    const [isChecked, setIsChecked] = useState(getInitCheckboxesState())

    console.log('test', isChecked)

    function clickCheckBox(e) {
        setIsChecked(prevState => ({...prevState, [e.target.name]: !prevState[e.target.name]}))

    }

    function clearAll() {
        setIsChecked(getInitCheckboxesState());
    }

    function selectAll() {
        setIsChecked(getSelectedAllCheckboxes())
    }

    const isClearAll = Object.values(isChecked).every(Boolean);

    function onClickSelectClear() {
        isClearAll ? clearAll() : selectAll()
    }


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
        <PreferencesCheckboxes clickCheckBox={clickCheckBox} checkboxesState={isChecked}/>
    </div>;
}

export default PreferenceInputBlock;