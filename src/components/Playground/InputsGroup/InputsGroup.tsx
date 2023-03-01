import React from 'react';
import TextInput, {InputValueProps} from "../TextInput/TextInput";

type InputValueWithoutOnchange=Omit<InputValueProps, 'onChange'>
type Props = {inputs:InputValueWithoutOnchange[]; onChange:InputValueProps["onChange"]};

const InputsGroup: React.FC<Props> = ({onChange,inputs}) => {
    return <div>
        {inputs.map(el=><TextInput {...el} onChange={onChange}/>)}
    </div>;
}

export default InputsGroup;