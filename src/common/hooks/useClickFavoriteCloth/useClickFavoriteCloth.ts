import {useDispatch, useSelector, useStore} from "react-redux";
import UserStoreHelper from "../../../components/Registration/SelectDate/utils/UserStoreHelper";
import {addFavoriteItem} from "../../redux/clothes/actions";

const useClickFavoriteCloth=()=>{
    // @ts-ignore
    const favoriteItems = useSelector(state => state.clothes.favoriteItems);
    // @ts-ignore
    const loggedInSer = useSelector(state => state.users.loggedInUser);

    const dispatch = useDispatch();
    const {getState} = useStore();
    console.log('favoriteItems',favoriteItems)
    const clickOnFavorite=(id:number)=>{
        console.log('idiidi',id)
        const isClothInFavorite = favoriteItems.includes(id);


        if (!isClothInFavorite) {
            if (loggedInSer) {
                const newUser = {
                    ...loggedInSer,
                    favorites: loggedInSer.favorites ? [...favoriteItems, id] : [id]

                }

                UserStoreHelper.addUser(newUser, () => {

                }, () => {
                }, 'put');

            }
            dispatch(addFavoriteItem(id));

            //@ts-ignore
            localStorage.setItem('favoriteClothes', getState().clothes.favoriteItems)
        }
    }
    return clickOnFavorite
}
export default useClickFavoriteCloth