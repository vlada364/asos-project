import React from 'react';
import styles from "./RegistrationForm.module.css";



const Form = () => {
    return (
        <form id="form" className={styles.form}>
            <label className={styles.nameLabel}> EMAIL ADDRESS:</label>
            <div id="tooltip"></div>
            <input id="email_address" className={styles.formInput} value="" type="text"/>
            <div className={styles.littleNote}><p>We'll send your order confirmation here</p></div>
            <label className={styles.nameLabel}> FIRST NAME:</label>
            <div id="tooltip_name"></div>
            <input id="first_name" className={styles.formInput}
                   value="" maxLength="15" type="text"/>
            <label className={styles.nameLabel}> LAST NAME:</label>
            <div id="tooltip_last_name"></div>
            <input id="last_name" className={styles.formInput} value=""/>
            <label className={styles.nameLabel}> PASSWORD:</label>
            <div id="tooltip_password"></div>
            <input id="password"
                   className={styles.formInput} value=""/>
            <div className={styles.littleNote}><p>Must be 10 or more characters</p></div>
            <div><label className={styles.nameLabel}>DATE OF
                BIRTH:</label></div>
            <div style={{  display: 'flex',justifyContent: 'space-between'}}>
                <select id="day" className={styles.selectBlock} name="day">
                    <option value="0">DD</option>
                </select>
                <select id="month" className={styles.selectBlock}  name="month">
                    <option value="0">Month</option>
                </select>
                <select id="year" className={styles.selectBlock}  name="year">
                    <option value="0">YYYY</option>
                </select>
            </div>
            <div className={styles.littleNote}><p className="text-gray-400">You need to be 16 or over to use ASOS</p></div>
            <div className={styles.nameLabel}>
                <p >MOSTLY INTERESTED IN:</p>
            </div>
            <div className={styles.selectCategory}>
                <div id="women-select" className={styles.radioCheck}>
                    <input type="radio" name="gender" checked/>
                    <label>Womenswear</label>
                </div>
                <div id="men-select" className={styles.radioCheck}>
                    <input type="radio" name="gender"/>
                    <label>Menswear</label>
                </div>
            </div>
            <div  className={styles.contactPreferences}>
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
            <div id="input_select" className={styles.inputSelectContainer}>
                <div className={styles.inputSelectCategory}>
                    <label>Discounts and sales</label><input type="checkbox" className="checkbox-input"/>
                </div>
                <div className={styles.inputSelectCategory}>
                    <label>New stuff</label><input type="checkbox" className="checkbox-input"/>
                </div>
                <div className={styles.inputSelectCategory}>
                    <label>Your exclusives</label><input type="checkbox" className="checkbox-input"/>
                </div>
                <div className={styles.inputSelectCategory}>
                    <label>Asos partners</label><input type="checkbox" className="checkbox-input"/>
                </div>
            </div>
            <div className={styles.btnJoinAsos}>
                <button type="button" id="btn-asos"><p>JOIN ASOS</p></button>
            </div>
        </form>
    );
}

export default Form;