import React from 'react';
import styles from './Components.module.css'



const Tooltip= ({text,className}) => {
    return <div className={className}><p>{text}</p></div>;
}

export default Tooltip;