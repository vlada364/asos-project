import React from 'react';
import style from '../MainPage.module.css'

type Props = {img:string,title:string,paragraph:string,btnText:string};

const TwoBigImagesShopChoose: React.FC<Props> = ({img,title,paragraph,btnText}) => {
    return<div className={style.bigImageBlock}>
            <img src={img}/>
            <span>{title}</span>
            <p>{paragraph}</p>
            <div><button className={style.bigImageBtn}><p>{btnText}</p></button></div>
        </div>
    ;
}

export default TwoBigImagesShopChoose;