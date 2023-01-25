import {Cloth, CLOTHES_STORE} from "./ClothesStoreHelper";
import {UserBasket} from "../../../common/types/user/User";
import {BASKET_STORE} from "../../Registration/SelectDate/utils/UserStoreHelper";

class BasketStoreHelper{

    static getDB() {
        return indexedDB.open('asos-db', 3);
    }

    addClothesBasket(data: UserBasket, email:string,onSuccess: Function, onError: Function, method?: 'put') {
        const db = BasketStoreHelper.getDB();
        db.onsuccess = function () {
            let asosDb = db.result;
            let tx = asosDb.transaction([BASKET_STORE], 'readwrite');
            const store = tx.objectStore(BASKET_STORE);
            if (method === 'put') {
                store.put(data, email);
            } else {
                store.add(data, email);
            }
            tx.onerror = (e) => {
                console.error('ERROR TRANSACTION', e);
                // тут меняещб тултип
                onError?.()
            }
            tx.oncomplete = () => {
                onSuccess();
            }
        }
    }


    getClothes(onSuccess: (basket: UserBasket[]) => void) {
        const db = BasketStoreHelper.getDB();
        db.onsuccess = function () {
            let result = db.result
            let request = result.transaction([BASKET_STORE], "readonly").objectStore(BASKET_STORE).getAll();
            request.onsuccess = function () {
                onSuccess(request.result)
            }
            request.onerror = function () {
            }
        }
        db.onerror = function () {
            console.log('ОШИБКА')
        }
    }
    getClothFromBasketByUser(email,onSuccess){
        const db=BasketStoreHelper.getDB();
        db.onsuccess=function(){
            let result=db.result;
            console.log('kekes',email)
            let request=result.transaction([BASKET_STORE],"readonly").objectStore(BASKET_STORE).get(email)
            request.onsuccess=function (){
                onSuccess(request.result)
            }
            request.onerror=function(){

            }
            db.onerror=function (){
                console.log('Ошибка')
            }
        }
    }
}

export default BasketStoreHelper;