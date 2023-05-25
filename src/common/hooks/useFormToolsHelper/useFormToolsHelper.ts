import {useState} from "react";


const useFormToolsHelper = <T>(initialState:T, initialTooltipsState: Partial<Record<keyof T, string>>) => {
    const [inputsValue, setInputStateValue] = useState(initialState);
    const [tooltipsText, setTooltipsTextState] = useState<Partial<Record<keyof T,string>>>(initialTooltipsState);
    const [isDisabled, setDisabled] = useState(true);

    const changeFieldTooltip = (name:string, text:string) => setTooltipsTextState((prev) => ({
        ...prev, [name]: text
    }));


    const changeInputValueByName = <Key extends keyof T>(name:Key, value:T[Key]) => setInputStateValue(prevState => ({...prevState, [name]: value}));


    return {changeFieldTooltip, changeInputValueByName, inputsValue, tooltipsText, isDisabled,setDisabled,setInputStateValue}
}

export default useFormToolsHelper;