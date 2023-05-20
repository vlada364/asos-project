import React from 'react';
import {Link} from "react-router-dom";
import linkStyle from '../../../common/styles/link/link.module.css';
import {LabelAndUrl} from "../utils/footerInfoContants";



const FooterColumnInformation: React.FC<LabelAndUrl> = ({url, label}) => {
    return <li><Link className={linkStyle.link} to={url}>{label}</Link></li>;
}

export default FooterColumnInformation;