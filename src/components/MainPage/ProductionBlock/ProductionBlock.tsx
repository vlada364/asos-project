import React from 'react';
import style from "../MainPage.module.css";
import ProductionFiftyPercentSale from "../ProductionFiftyPercentSale/ProductionFiftyPercentSale";

type Props = {};

const ProductionBlock: React.FC<Props> = () => {
    return <div className={style.mainPage}>
        <div className={style.mainProduction}>
            <div className={style.offerBlock}>
                <div style={{margin: '16px 10px'}}><span><strong>UP TO 50% OFF MAJOR LAYERS!<br/>COATS, KNITS, BOOTS & MORE</strong></span>
                </div>
            </div>
            <div className={style.offerBlock}>
                <div style={{margin: '21px 10px'}}><span><strong>FREE WORLDWIDE DELIVERY</strong></span></div>
            </div>
        </div>
        <div>
            <ProductionFiftyPercentSale/>
        </div>
    </div>;
}

export default ProductionBlock;