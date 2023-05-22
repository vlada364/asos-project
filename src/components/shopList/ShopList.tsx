import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import ClothesStoreHelper, {Cloth} from "../adminPanel/utils/ClothesStoreHelper";
import Select, {components} from 'react-select';
import style from './ShopList.module.css';
import Slider from "@mui/material/Slider";
import ShopGallery from "./ShopGallery/ShopGallery";
import {selectSort,selectSize,selectByColor} from './data/ShopListInfo'

type Props = {};


let initialClothes;

const ShopList: React.FC<Props> = () => {
    const {state} = useLocation();
    const [sortByPrice, setSortByPrice] = useState(selectSort[0]);
    const [sortByColor, setCortByColor] = useState([]);
    const [sortBySize, setSortBySize] = useState([]);
    const [range, setRange] = useState([0, 510]);

    const [clothes, setClothes] = useState<Cloth[]>();

    function changeSelectByPrice(event) {
        setSortByPrice(event);

    }


    function changeSelectByColor(event) {
        setCortByColor(event);
    };

    useEffect(() => {
        if(!initialClothes){
            return;
        }
        const colors = sortByColor.map(({value}) => value.toLowerCase());
        const sizes = sortBySize.map((el) => el.label);
        const newClothes = initialClothes.filter((cloth) => {
            if(colors.length===0 && sizes.length===0){
                return true;
            }
            return colors.includes(cloth.colour.toLowerCase()) || cloth.sizes.some((size) => sizes.includes(size.label))
        });
        if (sortByPrice.value === 'PriceLowToHigh') {
            newClothes.sort((a, b) => Number(a.price) - Number(b.price));

        } else {
            newClothes.sort((a, b) => Number(b.price) - Number(a.price));

        }

        setClothes(newClothes)
    }, [sortByColor, sortByPrice, sortBySize])

    function changeSelectBySize(event) {
        setSortBySize(event);

    }

    function handleChanges(event, newValue) {
        setRange(newValue);
    }

    useEffect(() => {
        const tags = state.dislayTags as string[];
        const db = new ClothesStoreHelper();
        db.getClothes((clothes) => {
            // фильтруем чтобы хотя бы одна категория присутствовала
            const filteredClothes = clothes.filter(({categories}) => categories.some(({value}) => tags.includes(value)));
            const mappedClothes = filteredClothes.map(({images, ...rest}) => ({
                ...rest,
                images: images.map((file) => URL.createObjectURL(file as unknown as File))
            }));
            setClothes(mappedClothes);
            initialClothes = mappedClothes;

        })
    }, []);

    if (!initialClothes) {
        return null;
    }



    return <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div className={style.clothCategoryName}>Dresses</div>
        <div className={style.containerSelect}>
            <div className={style.categorySelectBlock}>
                <div><Select isMulti={false}
                             options={selectSort}
                             onChange={changeSelectByPrice}
                             value={sortByPrice}
                             closeMenuOnSelect={false}
                             className="basic-single"
                             isSearchable={false}
                             name={'SortBy'}
                             classNamePrefix="select" menuPlacement={'auto'}/>
                </div>
                <div><Select isMulti
                             components={{
                                 Option: ({children, ...rest}) => {
                                     return (<components.Option {...rest}>
                                         <div style={{display: "flex"}}>
                                             <div style={{
                                                 width: 30,
                                                 height: 30,
                                                 backgroundColor: '#' + rest.data.colour
                                             }}></div>
                                             {children}
                                         </div>
                                     </components.Option>)
                                 }
                             }}
                             options={selectByColor}
                             onChange={changeSelectByColor}
                             value={sortByColor}
                             className="basic-multi-select"
                             closeMenuOnSelect={false}
                             name={'SortByColor'}
                             classNamePrefix="select" menuPlacement={'auto'}/>
                </div>
                <div><Select isMulti
                             options={selectSize}
                             onChange={changeSelectBySize}
                             value={sortBySize}
                             className="basic-multi-select"
                             closeMenuOnSelect={false}
                             name={'SelectBySize'}
                             classNamePrefix="select" menuPlacement={'auto'}/>
                </div>
                <div><Select isMulti
                             components={{
                                 Option: ({children, ...rest}) => {
                                     return (<components.Option {...rest}>
                                         <div style={{display: "flex"}}>
                                             <input type="range" min="0" max="510"/>
                                         </div>
                                     </components.Option>)
                                 }
                             }}
                             value={range}
                             options={range}
                             className="basic-multi-select"
                             closeMenuOnSelect={false}
                             name={'SortByColor'}
                             classNamePrefix="select" menuPlacement={'auto'}/>
                </div>
                <div>
                    <Slider value={range} max={510} onChange={handleChanges} valueLabelDisplay="auto"/>
                </div>
            </div>
        </div>
        <div className={style.shopGalleryBlock}>
            <div
                className={style.shopGalleryContainer}>{clothes ? clothes.map(({
                                                                                   clothes_name,
                                                                                   id,
                                                                                   images: [firstImage, secondImage],
                                                                                   price
                                                                               }) => (
                <ShopGallery key={id} clothesName={clothes_name} price={price} firstImage={firstImage} id={id}
                             secondImage={secondImage}/>)) : 'Loading'}
            </div>
        </div>


    </div>;
}

export default ShopList;