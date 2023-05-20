import {renderHook} from "@testing-library/react";
import useAddToBasket from "../useAddToBasket";
import {Provider} from "react-redux";
import {store} from "../../../../index";



describe('useAddToBasket', () => {
    const wrapper = ({children}) => <Provider store={store}>{children}</Provider>
    it('should ', function () {
        const res = renderHook(() => useAddToBasket([]), {wrapper});
        console.log(res)
    });

});