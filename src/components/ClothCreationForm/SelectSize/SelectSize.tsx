import React from 'react';

type Props = {name:string,label:string};

const SelectSize: React.FC<Props> = ({name,label}) => {
    return <option value={name}>{label}</option>;
}

export default SelectSize;