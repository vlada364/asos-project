export const CLOTHES_STORE = 'clothes';
type SizesObj = { value: string, label: string }
export type Cloth = { images: string[], clothes_name: string, price: string, colour: string, sizes: SizesObj[], categories: SizesObj[], id?: number; gender: string }

class ClothesStoreHelper {

    static getDB() {
        return indexedDB.open('asos-db', 3);
    }

    addClothes(data: Cloth, onSuccess: Function, onError: Function, method?: 'put') {
        const db = ClothesStoreHelper.getDB();
        db.onsuccess = function () {
            let asosDb = db.result;
            let tx = asosDb.transaction([CLOTHES_STORE], 'readwrite');
            const store = tx.objectStore(CLOTHES_STORE);
            if (method === 'put') {
                store.put(data, data.id);
            } else {
                store.add(data, data.id);
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


    getClothes(onSuccess: (clothes: Cloth[]) => void) {
        const db = ClothesStoreHelper.getDB();
        db.onsuccess = function () {
            let result = db.result as IDBDatabase
            let request = result.transaction([CLOTHES_STORE], "readonly").objectStore(CLOTHES_STORE).getAll();
            request.onsuccess = function () {
                onSuccess(request.result as Cloth[])
            }
            request.onerror = function () {
            }
        }
        db.onerror = function () {
            console.log('ОШИБКА')
        }
    }
    getClothById(id:number,onSuccess:(cloth:Cloth)=>void):void{
        const db=ClothesStoreHelper.getDB();
        db.onsuccess=function(){
            let result=db.result as IDBDatabase;

            let request=result.transaction([CLOTHES_STORE],"readonly").objectStore(CLOTHES_STORE).get(Number(id))
            request.onsuccess=function (){
                onSuccess(request.result as Cloth)
            }
            request.onerror=function(){

            }
            db.onerror=function (){
                console.log('Ошибка')
            }
        }
    }
}

export default ClothesStoreHelper