import {useState} from "react";
import {getInitCheckboxesState} from "../../../components/Registration/Form/Form";

const useFormToolsHelper = (initialState, initialTooltipsState) => {
    const [inputsValue, setInputStateValue] = useState(initialState);
    const [tooltipsText, setTooltipsTextState] = useState(initialTooltipsState);
    const [preferenceCheckState, setPreferenceChecked] = useState(initialState);
    const [isDisabled, setDisabled] = useState(true);

    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev, [name]: text
    }));
    const clickCheckBox=(name)=> {
        setPreferenceChecked(prevState => ({...prevState, [name]: !prevState[name]}))

    }

    const changeInputValueByName = (name, value) => setInputStateValue(prevState => ({...prevState, [name]: value}));


    return {changeFieldTooltip, changeInputValueByName, inputsValue, tooltipsText, isDisabled,setDisabled}
}

export default useFormToolsHelper;