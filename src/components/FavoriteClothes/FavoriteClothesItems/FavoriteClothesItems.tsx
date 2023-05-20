import React from 'react';

import Select, {GroupBase} from 'react-select';
import style from './FavoriteClothesItems.module.css';
import {MdOutlineDelete} from 'react-icons/md'
import {PublicBaseSelectProps} from "react-select/base";

export type SizesObj = { value: string, label: string }
type FavoriteCloth = { clothes_name: string, images: string, price: string, id: number | undefined, value: SizesObj[], sizes: SizesObj[], colour: string, deleteCloth: (id: number) => void, addToBasket: (id: number) => void, selectSizeEvent: PublicBaseSelectProps<SizesObj, false, GroupBase<SizesObj>>['onChange'] };

const FavoriteClothesItems: React.FC<FavoriteCloth> = ({
                                                           clothes_name,
                                                           images,
                                                           price,
                                                           id,
                                                           colour,
                                                           value,
                                                           deleteCloth,
                                                           addToBasket,
                                                           selectSizeEvent,
                                                           sizes

                                                       }) => {


    return <div className={style.favoriteCloth}>
        <div className={style.infoNonControl}>
            <div style={{position: 'relative'}}><img src={images}/>
                <div className={style.btnDeleteCloth} onClick={() => deleteCloth(id)}><MdOutlineDelete/></div>
            </div>
            <span className={style.clothName}>{clothes_name}</span>
            <span className={style.clothPrice}>£{price}</span>
        </div>
        <div className={style.clothColor}><p>{colour.toUpperCase()}</p></div>
        <div className={style.chooseSize}><Select options={sizes}
                                                  isMulti={false}
                                                  onChange={selectSizeEvent}
                                                  value={value[id]}
                                                  closeMenuOnSelect={false}
                                                  className="basic-single"
                                                  classNamePrefix="select"
                                                  isSearchable={false}/></div>
        <button className={style.moveClothToBag} onClick={() => addToBasket(id)}>MOVE TO BAG</button>
    </div>;
}

export default FavoriteClothesItems;