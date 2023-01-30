import React from 'react';
import styles from "../RegistrationForm.module.css";
import CheckboxList from "./CheckboxList";



const PreferenceInputBlock = () => {
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
                <button type="button" className={styles.selectAllBtn}>SELECT ALL</button>
            </div>
        </div>
       <CheckboxList/>
    </div>;
}

export default PreferenceInputBlock;