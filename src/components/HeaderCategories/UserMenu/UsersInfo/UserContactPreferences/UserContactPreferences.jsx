import React from 'react';
import styles from "../MyAccount/MyAccount.module.css";
import stylesForm from '../../../../Registration/RegistrationForm.module.css';
import {useState} from "react";
import {getInitCheckboxesState} from "../../../../Registration/Form/Form";
import {checkboxList} from "../../../../Registration/PreferenceInputBlock/PreferencesCheckboxes";
import {setLoggedInUser} from "../../../../../common/redux/users/actions";
import {useSelector} from "react-redux";
import useFormToolsHelper from "../../../../../common/hooks/useFormToolsHelper/useFormToolsHelper";


const UserContactPreferences = () => {
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    console.log(loggedInSer,'PATRGRG')
    const {
        preferenceCheckState,
        clickCheckbox

    } = useFormToolsHelper({asosPartners:loggedInSer.AsosPartners,
        discountsAndSales:loggedInSer.DiscountAndSales,newStuff:loggedInSer.NewStuff,yourExclusives:loggedInSer.YourExclusives})

    console.log(preferenceCheckState)
    // const {AsosPartners:asosPartners,DiscountsAndSales:discountAndSales,NewStuff:newStuff,YourExclusives:yourExclusives}=useSelector(state => state.users.loggedInUser);
    // console.log(asosPartners,discountAndSales,newStuff,yourExclusives)






    return <div className={styles.ordersUsers}>
        <div className={styles.ordersHeader}>
            <div className={styles.ordersImg}>
                <img src='/img/img99.svg'/>
            </div>
            <div className={styles.textMyOrders}><span>CONTACT PREFERENCES</span></div>
        </div>
        <div className={styles.ordersContainer}>
           <div>
               <div>
                   <span>CONTENT TYPES</span>
                   <p>What would you like to hear about? Select your options below and we'll keep you in the loop.</p>
               </div>
               <div>
                   <button type="button" className={stylesForm.selectAllBtn}
                           >gjg</button>
               </div>
           </div>
        </div>
    </div>;
}

export default UserContactPreferences;