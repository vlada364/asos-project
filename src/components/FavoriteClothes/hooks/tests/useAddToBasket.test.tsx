import {renderHook} from "@testing-library/react";
import useAddToBasket from "../useAddToBasket";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import userReducer from "../../../../common/redux/users/userReducer";
import clothesReducer from "../../../../common/redux/clothes/clothesReducer";
// import {store} from "../../../../index";


describe('useAddToBasket', () => {
    const wrapper = ({children}) => <Provider
        store={createStore(combineReducers({users: userReducer, clothes: clothesReducer}))}>{children}</Provider>
    it('should ', function () {
        // const res = renderHook(() => useAddToBasket([]), {wrapper});
        // console.log(res)
    });

});