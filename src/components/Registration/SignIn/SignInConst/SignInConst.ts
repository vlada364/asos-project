
import {textInput} from "../types/SignIn";


export const textInputSignIn:textInput[] = [
    {
        label: 'EMAIL ADDRESS', name: 'email_address'
    }, {
        label: 'PASSWORD', name: 'password',type:'password'
    }
]
export const textWarningMessage:string = 'Looks like either your email address or password were incorrect. Wanna try again?';