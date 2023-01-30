import React from 'react';
import styles from "../RegistrationForm.module.css";

const GenderCategoryInput=()=>{
    return(
        <div>
            <div className={styles.nameLabel}>
                <p>MOSTLY INTERESTED IN:</p>
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
        </div>
    )
}

export default GenderCategoryInput