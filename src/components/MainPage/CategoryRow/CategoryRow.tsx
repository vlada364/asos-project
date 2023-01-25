import React from 'react';
import style from '../MainPage.module.css'

type Props = {img:string,title:string,paragraph:string};

const CategoryRow: React.FC<Props> = ({img,title,paragraph}) => {
    return<div className={style.imgRowBlock}>
            <img src={img}/>
            <span>{title}</span>
            <p>{paragraph}</p>
        </div>;
}

export default CategoryRow;