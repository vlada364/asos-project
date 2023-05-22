import {useDispatch, useSelector, useStore} from "react-redux";
import UserStoreHelper from "../../../components/Registration/SelectDate/utils/UserStoreHelper";
import {addFavoriteItem} from "../../redux/clothes/actions";
import {RootState} from "../../../index";

const useClickFavoriteCloth=()=>{

    const favoriteItems = useSelector((state:RootState) => state.clothes.favoriteItems);
    const loggedInSer = useSelector((state:RootState) => state.users.loggedInUser);

    const dispatch = useDispatch();
    const {getState} = useStore();

    const clickOnFavorite=(id:number)=>{

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

            localStorage.setItem('favoriteClothes', (getState() as RootState).clothes.favoriteItems.toString())
        }
    }
    return clickOnFavorite
}
export default useClickFavoriteCloth