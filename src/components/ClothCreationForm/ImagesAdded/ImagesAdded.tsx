import React from 'react';
import {GrClose} from 'react-icons/gr';
import styles from '../../adminPanel/AdminPanel.module.css';

type Props = {url:string,deleteImg:(e)=>void};

const ImagesAdded: React.FC<Props> = ({url,deleteImg}) => {

    return <div className={styles.closeImage} onClick={deleteImg} >
        <GrClose />
        <img src={url} width={200} height={200}/>
    </div>;
}

export default ImagesAdded;