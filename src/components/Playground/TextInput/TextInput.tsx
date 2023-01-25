import React from 'react';

export type InputValueProps = {value:string,label:string,name:string,onChange:React.ChangeEventHandler<HTMLInputElement>};

const TextInput: React.FC<InputValueProps> = ({value,label,name,onChange}) => {
    return <label>
        {label}
        <input name={name} value={value} onChange={onChange}/>
    </label>;
}

export default TextInput;