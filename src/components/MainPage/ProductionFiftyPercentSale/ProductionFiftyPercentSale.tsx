import React from 'react';
import style from "../MainPage.module.css";

type Props = {};

const ProductionFiftyPercentSale: React.FC<Props> = () => {
    return <div className={style.saleBlock}>
        <div className={style.headlineSale}>
            <h2>UP TO 50% OFF MAJOR LAYERS!</h2>
        </div>
        <div>
            <span>COATS, KNITS, BOOTS & MORE</span>
            <p>Limited time only. Selected styles marked down as shown.</p>
        </div>

    </div>;
}

export default ProductionFiftyPercentSale;