import {checkboxList} from "../../PreferenceInputBlock/PreferencesCheckboxes";
import {Name} from "../../../../data/HeaderClothTypes/HeaderClothTypes";

export type LabelNameHintAndType = {
    label: string,
    name: string,
    hint?: string,
    type: string
}

export type Label = {
    label: string
}

export type Value = {
    value: string
}

export type NameAndLabel = Label & Name;

export type ValueAndName = Name & Value
export const registrationFormInputs: LabelNameHintAndType[] = [{
    label: 'EMAIL ADDRESS:', name: 'email_address', hint: `We'll send your order confirmation here`, type: 'text'
}, {
    label: 'FIRST NAME:', name: 'first_name', type: 'text'
}, {
    label: 'LAST NAME:', name: 'last_name', type: 'text'
}, {
    label: 'PASSWORD:', name: 'password', hint: 'Must be 10 or more characters', type: 'password'
}];

export const userDetailsFormInputs:LabelNameHintAndType[]= registrationFormInputs.filter(elem => elem.type !== 'password');

export const changePasswordInputs: LabelNameHintAndType[] = [{
    label: "YOUR CURRENT PASSWORD*",
    name: "password",
    type: 'password'
}, {label: "NEW PASSWORD*", name: "newPassword", type: "password", hint: 'Must be 10 or more characters'}]

export const addAddressBook: NameAndLabel[] = [{
    label: 'FIRST NAME', name: 'first_name'
}, {label: 'LAST NAME', name: 'last_name'}, {label: 'MOBILE', name: 'mobile'}]
export const interestedIn:ValueAndName[]= [{name: 'Womenswear', value: 'woman'}, {name: 'Menswear', value: 'man'}]

export const getSelectedAllCheckboxes = () => Object.fromEntries(checkboxList.map(el => [el.name, true]));

export const getInitCheckboxesState = () => Object.fromEntries(checkboxList.map(el => [el.name, false]));