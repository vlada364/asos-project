const USER_STORE = 'users';

class UserStoreHelper {

    constructor() {
        const openRequest = indexedDB.open('asos-db', 1);
        openRequest.onupgradeneeded = function (e) {
            let asosDb = e.target.result;
            asosDb.createObjectStore(USER_STORE)
        }
    }

    static getDB() {
        return indexedDB.open('asos-db', 1);
    }

    addUser(data, onSuccess, onError, method) {
        const db = UserStoreHelper.getDB();
        db.onsuccess = function () {
            let asosDb = db.result;
            let tx = asosDb.transaction([USER_STORE], 'readwrite');
            const store = tx.objectStore(USER_STORE);
            if (method === 'put') {
                store.put({...data}, data.email_address);

            } else {
                store.add({...data}, data.email_address);
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