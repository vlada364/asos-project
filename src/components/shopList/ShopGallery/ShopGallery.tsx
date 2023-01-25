import React, {useState} from 'react';
import style from '../ShopList.module.css';
import {useLocation, useNavigate, useParams} from "react-router";
import useClickFavoriteCloth from "../../../common/hooks/useClickFavoriteCloth/useClickFavoriteCloth";
import styleLike from "../ShopList.module.css";
import {useSelector} from "react-redux";


type Props = { clothesName: string, price: string, firstImage: string, secondImage: string, id: number };

const ShopGallery: React.FC<Props> = ({clothesName, firstImage, secondImage, price, id}) => {
    const [currentSrc, setSrc] = useState(firstImage);
    const navigate = useNavigate();
    const params = useParams();
    const clickFavorite = useClickFavoriteCloth();
    ///@ts-ignore
    const favoriteItems = useSelector(state => state.clothes.favoriteItems);
    // @ts-ignore
    const isClothInFavorite = favoriteItems.includes(id);

    function clickOnCloth(e) {
        console.log(e, 'vcvv');
        navigate(`/${params.gender}/shop/${id}`)

    }

    function clickFav(event, id) {
        event.stopPropagation();
        clickFavorite(id);
    }

    console.log('favorites', favoriteItems, id)

    return <div className={style.flexItemContainer} onClick={clickOnCloth}>
        <div className={style.shopListItem}
             style={{backgroundImage: `url(${currentSrc})`}} onMouseEnter={() => setSrc(secondImage)}
             onMouseLeave={() => setSrc(firstImage)}>
            <button className={!isClothInFavorite ? styleLike.likeClothBtn : styleLike.likeClothBtnHover}
                    style={{position: 'absolute'}} onClick={(event) => clickFav(event, id)}><span></span></button>
        </div>
        <p className={style.clothDescription}>{clothesName}</p>
        <p className={style.clothPrice}>{price}</p>
    </div>;
}

export default ShopGallery;