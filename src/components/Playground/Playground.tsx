import React from 'react';
import TextInput, {InputValueProps} from "./TextInput/TextInput";
import InputsGroup from "./InputsGroup/InputsGroup";

type Props = {};

const Playground: React.FC<Props> = () => {
    const onChange:InputValueProps["onChange"]=(e)=>{
        console.log(e)
    }

    return <div>
        <InputsGroup inputs={[{value:'Valik',name:'Valik',label:'Valik'},{
            value:'Vlada',name:'Vlada',label:'Vlada'},{value:'Val',name:'Val',label:'ValikSerebreanuuu'}]} onChange={onChange}/>
    </div>;
}

export default Playground;