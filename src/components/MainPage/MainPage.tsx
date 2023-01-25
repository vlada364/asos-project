import React from 'react';
import style from './MainPage.module.css';
import ProductionBlock from "./ProductionBlock/ProductionBlock";
import {useLocation} from "react-router";
import CategoryRow from "./CategoryRow/CategoryRow";
import {menBrands, womenBrands,menCategoriesRow, menTwoBigImage, womenCategoriesRow, womenTwoBigImage} from "./constans/constants";
import ProductionFiftyPercentSale from "./ProductionFiftyPercentSale/ProductionFiftyPercentSale";
import BigImageShopNow from "./BigImageShopNow/BigImageShopNow";
import TwoBigImagesShopChoose from "./TwoBigImagesShopChoose/TwoBigImagesShopChoose";
import BrandsRow from "./BrandsRow/BrandsRow";
import SocialMediaAndCardsIcons from "./SocialMediaAndCardsIcons/SocialMediaAndCardsIcons";

type Props = {};

const links=['https://content.asos-media.com/-/media/homepages/ww/2023/march/10-prime/ts-homepage-banner/ts_dt_hero_1258x600px.jpg','https://content.asos-media.com/-/media/homepages/mw/2023/march/10-prime/tm-homepage-banner/tm_dt_hero_1258x600px_v2.jpg']
const MainPage: React.FC<Props> = () => {
    const location=useLocation();
    const isWoman=location.pathname.includes('woman');

    return <div style={{backgroundColor:'white'}}>
        <ProductionBlock/>
        <div>
        <BigImageShopNow link={isWoman?links[0]:links[1]}/>
        <div className={style.categoryRow}>
            {isWoman?womenCategoriesRow.map(el=>(<CategoryRow img={el.img} title={el.title} paragraph={el.paragraph}/>)):menCategoriesRow.map(el=>(<CategoryRow img={el.img} title={el.title} paragraph={el.paragraph} />))}
        </div>
        </div>
        <ProductionFiftyPercentSale/>
        <div className={style.twoBigImageContainer}>
            {isWoman?womenTwoBigImage.map(el=>(<TwoBigImagesShopChoose img={el.img} title={el.title} paragraph={el.paragraph} btnText={el.btnText}/>)):menTwoBigImage.map(el=>(<TwoBigImagesShopChoose img={el.img} title={el.title} paragraph={el.paragraph} btnText={el.btnText}/>))}
        </div>
        <div className={style.trendingBrandTitle}><p>TRENDING BRANDS</p></div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            {isWoman?womenBrands.map(el=><BrandsRow img={el}/>):menBrands.map(el=>(<BrandsRow img={el}/>))}
        </div>
        <SocialMediaAndCardsIcons/>
    </div>;
}

export default MainPage;