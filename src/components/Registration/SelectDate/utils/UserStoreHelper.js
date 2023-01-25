import {CLOTHES_STORE} from "../../../adminPanel/utils/ClothesStoreHelper";

const USER_STORE = 'users';


export const BASKET_STORE = 'basket';

class UserStoreHelper {

    constructor() {
        const openRequest = indexedDB.open('asos-db', 3);
        openRequest.onupgradeneeded = function (e) {
            console.log('USER UPGRADE NEEDED')
            let asosDb = e.target.result;
            if (!asosDb.objectStoreNames.contains(USER_STORE)) {
                asosDb.createObjectStore(USER_STORE);
            }
            if (!asosDb.objectStoreNames.contains(CLOTHES_STORE)) {
                asosDb.createObjectStore(CLOTHES_STORE, {keyPath: 'id', autoIncrement: true});
            }
            if (!asosDb.objectStoreNames.contains(BASKET_STORE)) {
                asosDb.createObjectStore(BASKET_STORE);
            }
        }
    }

    static getDB() {
        return indexedDB.open('asos-db', 3);
    }

    addUser(data, onSuccess, onError, method) {
        const db = UserStoreHelper.getDB();
        db.onsuccess = function () {
            let asosDb = db.result;
            let tx = asosDb.transaction([USER_STORE], 'readwrite');
            const store = tx.objectStore(USER_STORE);
            if (method === 'put') {
                store.put(data, data.email_address);

            } else {
                store.add(data, data.email_address);
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

    getUser(email, onSuccess) {
        const db = UserStoreHelper.getDB();
        db.onsuccess = function () {
            let result = db.result
            let request = result.transaction([USER_STORE], "readonly").objectStore(USER_STORE).get(email.toLowerCase().trim());
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
}

export default new UserStoreHelper();