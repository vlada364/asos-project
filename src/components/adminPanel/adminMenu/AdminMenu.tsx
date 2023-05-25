import React from 'react';
import styles from '../../Registration/RegistrationForm.module.css';
import {useNavigate} from "react-router";

type Props = {};

const AdminMenu: React.FC<Props> = () => {
    const navigate=useNavigate();

    return <>
        <button className={styles.signIn} onClick={()=>{
            navigate('/admin/clothes/create')
        }
        }>Add clothes</button>
    </>;
}

export default AdminMenu;