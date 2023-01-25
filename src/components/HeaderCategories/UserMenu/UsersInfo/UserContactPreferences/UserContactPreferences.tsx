import React, {useEffect, useRef} from 'react';
import styles from "../MyAccount/MyAccount.module.css";
import stylesPref from './ContactPreferences.module.css'
import {useDispatch, useSelector} from "react-redux";
import useFormToolsHelper from "../../../../../common/hooks/useFormToolsHelper/useFormToolsHelper";
import UserHeader from "../UserAddressBook/UserHeader";
import {User} from "../../../../../common/types/user/User";
import loggedUserSelector from "../../../../../common/selectors/loggedUserSelector/loggedUserSelector";
import ContentTypesSelectWithButton from "./ContentTypesSelectWithButton";
import ContactTypes from "./ContactTypes";
import {setLoggedInUser} from "../../../../../common/redux/users/actions";
import ConFirmPreferencesBtn from "./ConFirmPreferencesBtn";
import {useState} from 'react'
import UserStoreHelper from "../../../../Registration/SelectDate/utils/UserStoreHelper";


type Props = {};


type StateWithUser = { users: { loggedInUser?: User } }

export type ContactTypesObj = { img: string, label: string, name: string, text: string, value: boolean };


const allUnchecked = {
    AsosPartners: false,
    YourExclusives: false,
    DiscountsAndSales: false,
    NewStuff: false
}

const allChecked = {
    AsosPartners: true,
    YourExclusives: true,
    DiscountsAndSales: true,
    NewStuff: true
}


const UserContactPreferences = () => {
    const loggedInSer = useSelector(loggedUserSelector);

    const initialState = {
        AsosPartners: loggedInSer.AsosPartners,
        YourExclusives: loggedInSer.YourExclusives,
        DiscountsAndSales: loggedInSer.DiscountsAndSales,
        NewStuff: loggedInSer.NewStuff

    }
    const {
        setDisabled,

        isDisabled,
        inputsValue,
        changeInputValueByName,
        setInputStateValue
    } = useFormToolsHelper(initialState);

    console.log(loggedInSer, 'PATRGRG')
    const dispatch = useDispatch();


    const contentTypesArray = [{
        img: '/img/imageForCheckbox.webp',
        name: 'DiscountsAndSales',
        label: 'Discounts and Sales',
        text: 'Be first in line to nab the stuff you love for less.',
        value: loggedInSer.DiscountsAndSales
    },
        {
            img: '/img/imgForCheckBox22.jpg',
            name: 'NewStuff',
            label: 'New Stuff',
            text: 'Fashion drops, news and style advice: hear it first, wear it first.',
            value: loggedInSer.NewStuff
        },
        {
            img: '/img/imgForCheckBox33.webp',
            name: 'YourExclusives',
            label: 'Your exclusives',
            text: 'Enjoy a birthday treat, as well as tailored rewards and account updates.',
            value: loggedInSer.YourExclusives
        },
        {
            img: '/img/imgForCheckBox44.webp',
            name: 'AsosPartners',
            label: 'Asos Partners',
            text: 'Stay in the know with exclusive collabs and handpicked offers.',
            value: loggedInSer.AsosPartners
        }]


    console.log(loggedInSer, 'LOGGEDINSEEER')

    function onClickCheckbox(e: { name: string; value: boolean; }) {

        changeInputValueByName(e.name, e.value)


    }

    useEffect(() => {
        if (JSON.stringify(inputsValue) === JSON.stringify(initialState)) {
            setDisabled(true)
        } else {
            setDisabled(false)

        }
    }, [inputsValue, loggedInSer])
    // ГАЛОЧКА КАКАЯ-ТО НЕ НАЖАТА
    const isClear = [inputsValue.AsosPartners, inputsValue.YourExclusives, inputsValue.DiscountsAndSales, inputsValue.NewStuff].every(Boolean);

    function onClickBtn() {
        setInputStateValue(isClear ? allUnchecked : allChecked);


    }

    function submitChanges() {

        const newCheckInfo = {...loggedInSer, ...inputsValue}
        UserStoreHelper.addUser(newCheckInfo, () => {
            dispatch(setLoggedInUser(newCheckInfo));
        }, () => {
        }, 'put');

    }

    console.log(inputsValue, 'INPUTSVALUE')


    return <div className={styles.ordersUsers}>
        <UserHeader src={'/img/img99.svg'} text={'CONTACT PREFERENCES'}/>

        <div className={stylesPref.contentTypesContainer}>
            <ContentTypesSelectWithButton textOne={'CONTENT TYPES'}
                                          textTwo={'What would you like to hear about? Select your options below and we\'ll keep you in the loop.'}
                                          textBtn={isClear ? 'Clear All' : 'Select all'}
                                          onClickBtn={onClickBtn}
            />
            <ContactTypes contentTypesArray={contentTypesArray} onClickCheckBox={onClickCheckbox}
                          inputsValue={inputsValue}/>
            <ConFirmPreferencesBtn disabled={isDisabled} submitChanges={submitChanges}/>
        </div>

    </div>

        ;
}

export default UserContactPreferences;