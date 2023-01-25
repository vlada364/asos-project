import React from 'react';
import {Link} from "react-router-dom";
import linkStyle from '../../../common/styles/link/link.module.css';

type Props = { label: string, url: string };

const FooterColumnInformation: React.FC<Props> = ({url, label}) => {
    return <li><Link className={linkStyle.link} to={url}>{label}</Link></li>;
}

export default FooterColumnInformation;