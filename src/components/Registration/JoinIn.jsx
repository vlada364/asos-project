import React from 'react';
import styles from './RegistrationForm.module.css'
import SignUpWith from "./SignUpWith";


const JoinIn = () => {
    return <main>
        <SignUpWith/>
        <div className={styles.registrationForm}>
            <h2>OR SIGN UP WITH EMAIL</h2>
            <form id="form" className={styles.form}>
                <label className={styles.nameLabel}> EMAIL ADDRESS:</label>
                <div id="tooltip"></div>
                <input id="email_address" className={styles.formInput} value="" type="text"/>
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
                <div><p>Must be 10 or more characters</p></div>
                <div><label className={styles.nameLabel}>DATE OF
                    BIRTH:</label></div>
                <div>
                    <select id="day" className="py-2.5 pl-3 pr-3 border-[2px] border-solid" name="day">
                        <option value="0">DD</option>
                    </select>
                    <select id="month" className="py-2.5 pl-3 pr-3 border-[2px] border-solid" name="month">
                        <option value="0">Month</option>
                    </select>
                    <select id="year" className="py-2.5 pl-3 pr-3 border-[2px] border-solid" name="year">
                        <option value="0">YYYY</option>
                    </select>
                    <p className="text-gray-400">You need to be 16 or over to use ASOS</p>
                </div>
                <div className={styles.nameLabel}>
                    <p >MOSTLY INTERESTED IN</p>
                </div>
                <div className=" select-category flex  gap-3 justify-between">
                    <div id="women-select" className="flex justify-between gap-5">
                        <input type="radio" name="gender" checked/>
                        <label>Womenswear</label>
                    </div>
                    <div id="men-select" className="flex justify-between gap-5">
                        <input type="radio" name="gender"/>
                        <label>Menswear</label>
                    </div>

                </div>
                <div className="flex flex-row justify-start gap-6">
                    <div className="justify-start flex flex-col">
                        <div className="justify-start flex">
                            <p>CONTACT PREFERENCES</p>
                        </div>
                        <div>
                            <p>Tell us which emails you’d like:</p>
                        </div>
                    </div>
                    <div className=" border-[2px] py-2.5 pl-3 pr-3 bg-neutral-300">
                        <button type="button" className="select_all_btn select-none">SELECT ALL</button>
                    </div>
                </div>
                <div id="input_select" className="flex flex-col justify-around">
                    <div className="flex flex-row justify-between">
                        <label>Discounts and sales</label><input type="checkbox" className="checkbox-input"/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <label>New stuff</label><input type="checkbox" className="checkbox-input"/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <label>Your exclusives</label><input type="checkbox" className="checkbox-input"/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <label>Asos partners</label><input type="checkbox" className="checkbox-input"/>
                    </div>
                </div>
                <div className="btn-join pr-20  pl-4 pt-5 pb-5 border-[2px] border-solid text-center">
                    <button type="button" id="btn-asos"><p>JOIN ASOS</p></button>
                </div>
            </form>
        </div>
    </main>;
}

export default JoinIn;