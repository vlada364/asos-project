import React from 'react';
import {Outlet} from "react-router";

import style from './AdminPanel.module.css'

type Props = {};

const AdminPanel: React.FC<Props> = () => {
    return <div>
        <div className={style.adminPanelTitle}><h1>Admin panel</h1></div>
    <Outlet/>
    </div>;
}

export default AdminPanel;