import React from 'react';

export type NameAndLabel = {name:string,label:string};

const SelectSize: React.FC<NameAndLabel> = ({name,label}) => {
    return <option value={name}>{label}</option>;
}

export default SelectSize;