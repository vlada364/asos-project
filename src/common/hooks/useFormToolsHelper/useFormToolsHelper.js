import {useState} from "react";

const useFormToolsHelper = (initialState, initialTooltipsState) => {
    const [inputsValue, setInputStateValue] = useState(initialState);
    const [tooltipsText, setTooltipsTextState] = useState(initialTooltipsState)
    const [isDisabled, setDisabled] = useState(true);

    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev, [name]: text
    }));

    const changeInputValueByName = (name, value) => setInputStateValue(prevState => ({...prevState, [name]: value}));


    return {changeFieldTooltip, changeInputValueByName, inputsValue, tooltipsText, isDisabled,setDisabled}
}

export default useFormToolsHelper;