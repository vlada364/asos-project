import ClothesStoreHelper, {Cloth} from "../../adminPanel/utils/ClothesStoreHelper";
import BasketStoreHelper from "../../adminPanel/utils/BasketStoreHelper";
import {BasketCloth, SizesObj} from "../../../common/types/user/User";
import {setClothesAdd} from "../../../common/redux/clothes/actions";
import {useDispatch, useSelector} from "react-redux";

const useAddToBasket=(selectSize:SizesObj[])=>{
    // @ts-ignore
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    // @ts-ignore
    const basketClothes: any[] = useSelector(state => state.clothes.basketItems);
    const dispatch = useDispatch();


    function addToBasket(id) {
        console.log('BACKEET', id)
        const obj = new ClothesStoreHelper()
        obj.getClothById(id, (clothes: Cloth) => {

            const basketObj = new BasketStoreHelper();
            const basketCloth: BasketCloth = {
                name: clothes.clothes_name,
                color: clothes.colour,
                id: id,
                price: clothes.price,
                size: selectSize
            };
            console.log(basketCloth.size, 'BASKETCLOTH')
            if (basketCloth.size) {
                basketObj.addClothesBasket([...basketClothes, basketCloth], loggedInSer.email_address, () => {
                }, () => {
                }, 'put');
                dispatch(setClothesAdd([...basketClothes, basketCloth]))
            } else {
                alert('УКАЖИ РАЗМЕР')
            }
            // basketObj.addClothesBasket()
            // console.log('basket',{name:clothes.clothes_name,color:clothes.colour,id:id,price:clothes.price,size:selectSize})
        })
    }

    return addToBasket;
}

export default useAddToBasket;