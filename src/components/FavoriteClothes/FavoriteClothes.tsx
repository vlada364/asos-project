import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ClothesStoreHelper, {Cloth} from "../adminPanel/utils/ClothesStoreHelper";
import FavoriteClothesItems, {SizesObj} from "./FavoriteClothesItems/FavoriteClothesItems";
import style from './FavoriteClothes.module.css'
import userStoreHelper from "../Registration/SelectDate/utils/UserStoreHelper";
import {setFavoriteItems} from "../../common/redux/clothes/actions";
import NoSavedItems from "./NoSavedItems/NoSavedItems";
import useAddToBasket from "./hooks/useAddToBasket";
import {RootState} from "../../index";

type Props = {};

const FavoriteClothes: React.FC<Props> = () => {

    const loggedInSer = useSelector((state:RootState)=> state.users.loggedInUser);
    const [favoriteClothes, setFavoriteClothes] = useState<Cloth[]>([]);

    const favoriteIds: number[] = useSelector((state:RootState) => state.clothes.favoriteItems);
    const dispatch = useDispatch();

    const sizes = favoriteClothes.map(el => el.sizes);
    const [selectSize, setSelectSize] = useState<SizesObj[]>(sizes[0]);
    const isUser = localStorage.getItem('loggedUser');
    const addToBasket=useAddToBasket(selectSize);

    useEffect(()=>{
        if(!selectSize){
            setSelectSize(sizes[0]);
        }
    },[favoriteClothes])

    function selectSizeEvent(event) {
        setSelectSize(event)
        console.log(event)
    }

    const getClothAsync = (id) => new Promise((resolve) => {
        const store = new ClothesStoreHelper();
        store.getClothById(id, (cloth) => {
            resolve(cloth);
        })
    });

    const getAllFavorites = async () => {
        const clothes = [];
        console.log('favorites', favoriteIds)
        for (const favoriteId of favoriteIds) {
            clothes.push(await getClothAsync(favoriteId));
        }
        console.log('GOT ALL CLOTHES',clothes);
        setFavoriteClothes(clothes);
    }


    useEffect(() => {
        getAllFavorites();
    }, [favoriteIds]);


    function deleteClothFromFavorites(id) {

        const newFavClothes = favoriteIds.filter((el) => el !== id);

        userStoreHelper.addUser({...loggedInSer, favorites: [...newFavClothes]}, () => {
            dispatch(setFavoriteItems(newFavClothes))
        }, () => {
        }, 'put');

        const storageIds = localStorage.getItem('favoriteClothes').split(',').map(Number).filter((el) => el !== id);
        localStorage.setItem('favoriteClothes', storageIds.toString());
    }

    console.log('SIZE',selectSize)

    return <div className={style.favClothesContainer}>
        <div className={style.heading}><span>Saved Items</span></div>
        <div className={style.favClothes}>
            {favoriteClothes.length !== 0 && selectSize ? (favoriteClothes.map((el) => (
                <FavoriteClothesItems clothes_name={el.clothes_name}
                                      images={URL.createObjectURL(el.images[0] as unknown as File)}
                                      price={el.price}
                                      id={el.id} colour={el.colour}
                                      sizes={el.sizes}
                                      deleteCloth={deleteClothFromFavorites}
                                      addToBasket={addToBasket}
                                      value={selectSize}
                                      selectSizeEvent={selectSizeEvent}

                    // value={selectSize}

                />))) : <NoSavedItems
                text={`Start saving as you shop by selecting the little heart.We'll sync your items across all your devices. Easy.`}
                textBtn={'START SHOPPING'} textHead={'You have no Saved Items'}/>
            }
            {(!isUser && favoriteClothes.length === 0) &&
                <NoSavedItems text={'Sign in to sync your Saved Items across all your devices.'} textBtn={'SIGN IN'}
                              textHead={'You have no Saved Items'}/>
            }
        </div>
    </div>;
}

export default FavoriteClothes;