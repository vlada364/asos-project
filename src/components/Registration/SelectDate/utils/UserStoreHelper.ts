import {CLOTHES_STORE} from "../../../adminPanel/utils/ClothesStoreHelper";
import {User} from "../../../../common/types/user/User";

const USER_STORE = 'users';


export const BASKET_STORE = 'basket';

class UserStoreHelper {
    private static readonly DB_NAME = 'asos-db';
    private static readonly DB_VERSION = 3;
    private static readonly USER_STORE = USER_STORE;
    private static readonly CLOTHES_STORE = CLOTHES_STORE;
    private static readonly BASKET_STORE = BASKET_STORE;

    constructor() {
        const openRequest = indexedDB.open(UserStoreHelper.DB_NAME, UserStoreHelper.DB_VERSION);
        openRequest.onupgradeneeded = function (e) {
            console.log('USER UPGRADE NEEDED')
            let asosDb = e.target.result;
            if (!asosDb.objectStoreNames.contains(UserStoreHelper.USER_STORE)) {
                asosDb.createObjectStore(UserStoreHelper.USER_STORE);
            }
            if (!asosDb.objectStoreNames.contains(UserStoreHelper.CLOTHES_STORE)) {
                asosDb.createObjectStore(UserStoreHelper.CLOTHES_STORE, {keyPath: 'id', autoIncrement: true});
            }
            if (!asosDb.objectStoreNames.contains(UserStoreHelper.BASKET_STORE)) {
                asosDb.createObjectStore(UserStoreHelper.BASKET_STORE);
            }
        }
    }

    static getDB(): IDBOpenDBRequest {
        return indexedDB.open(UserStoreHelper.DB_NAME, UserStoreHelper.DB_VERSION);
    }

    addUser(data:User, onSuccess:()=>void, onError?:()=>void, method?:'put') {
        const db = UserStoreHelper.getDB();
        db.onsuccess = function () {
            let asosDb = db.result as IDBDatabase;
            let tx = asosDb.transaction([UserStoreHelper.USER_STORE], 'readwrite');
            const store = tx.objectStore(UserStoreHelper.USER_STORE);
            if (method === 'put') {
                store.put(data, data.email_address);

            } else {
                store.add(data, data.email_address);
            }
            tx.onerror = (e) => {
                console.error('ERROR TRANSACTION', e);

                onError?.()
            }
            tx.oncomplete = () => {
                onSuccess();
            }
        }
    }

    getUser(email:string, onSuccess:(result:User)=>void, onError?:()=>void) {
        const db = UserStoreHelper.getDB();
        db.onsuccess = function () {
            let result = db.result as IDBDatabase;
            let request = result.transaction([UserStoreHelper.USER_STORE], "readonly").objectStore(UserStoreHelper.USER_STORE).get(email.toLowerCase().trim());
            request.onsuccess = function () {
                onSuccess(request.result)
            }
            request.onerror = function () {
            }
        }
        db.onerror = function () {
            onError && onError()
            console.log('ОШИБКА')
        }
    }
}

export default new UserStoreHelper();