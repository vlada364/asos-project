import React, {useEffect, useState} from 'react';
import style from './ClothDescription.module.css';
import Select from 'react-select';
import styleLike from '../ShopList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addFavoriteItem} from "../../../common/redux/clothes/actions";
import UserStoreHelper from "../../Registration/SelectDate/utils/UserStoreHelper";
import useClickFavoriteCloth from "../../../common/hooks/useClickFavoriteCloth/useClickFavoriteCloth";


type Sizes = { value: string, label: string }
type Props = { name: string, price: string, colour: string, sizes: Sizes[], id: number };

const ClothDescription: React.FC<Props> = ({name, price, colour, sizes, id}) => {
    const [sizesSelected, setSizes] = useState(sizes[0]);
    const clickFavorite = useClickFavoriteCloth();

    // @ts-ignore
    const favoriteItems = useSelector(state => state.clothes.favoriteItems);
    // @ts-ignore
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    console.log(favoriteItems, loggedInSer, 'favorite')


    function selectGender(event) {
        setSizes(event)
        console.log(event, 'EVENT')
    }

    const isClothInFavorite = favoriteItems.includes(id);

    return <div className={style.clothInformation}>
        <span className={style.clothName}>{name}</span>
        <span className={style.priceCloth}>£{price}</span>
        <div className={style.clothColour}><span>COLOUR:</span><p>{colour}</p></div>
        <div className={style.clothSizeSelect}><span>Size:</span>
            <Select options={sizes}
                    isMulti={false}
                    onChange={selectGender}
                    value={sizesSelected}
                    closeMenuOnSelect={false}
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={false}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}} className={style.actionBtns}>
            <button className={style.btnAddToBag}>ADD TO BAG</button>
            <button className={!isClothInFavorite ? styleLike.likeClothBtn : styleLike.likeClothBtnHover}
                    onClick={()=>clickFavorite(id)}><span></span></button>
        </div>
    </div>;
}

export default ClothDescription;