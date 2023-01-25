import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import ClothesStoreHelper, {Cloth} from "../adminPanel/utils/ClothesStoreHelper";
import Select, {components} from 'react-select';
import style from './ShopList.module.css';
import Slider from "@mui/material/Slider";
import ShopGallery from "./ShopGallery/ShopGallery";

type Props = {};

const selectSort = [{value: 'PriceHighToLow', label: 'Price high to low'},
    {value: 'PriceLowToHigh', label: 'Price low to high'}]

const selectByColor = [{value: 'Multi', label: 'Multi', color: 'E5E5E4'}, {
    value: 'Black',
    label: 'Black',
    color: '000'
}, {
    value: 'Green',
    label: 'Green',
    color: '0c944e'
}, {value: 'Pink', label: 'Pink', color: 'f122d4'},
    {value: 'White', label: 'White', color: 'fcfcfc'}, {value: 'Blue', label: 'Blue', color: '5a9fe3'}, {
        value: 'Red',
        label: 'Red',
        color: 'dd0215'
    }, {
        value: 'Brown',
        label: 'Brown',
        color: '5e171d'
    }, {value: 'Purple', label: 'Purple', color: '6e2082'},
    {value: 'Orange', label: 'Orange', color: 'eb5308'}, {
        value: 'Yellow',
        label: 'Yellow',
        color: 'e6e715'
    }, {value: 'Grey', label: 'Grey', color: '0c9317'}
]

const selectSize = [{value: 'eu_32', label: 'EU 32'}, {value: 'eu_34', label: 'EU 34'}, {
    value: 'eu_36',
    label: 'EU 36'
}, {value: 'eu_38', label: 'EU 38'},
    {value: 'eu_40', label: 'EU 40'}, {value: 'eu_42', label: 'EU 42'}, {value: 'eu_44', label: 'EU 44'}, {
        value: 'eu_46',
        label: 'EU 46'
    }, {value: 'eu_48', label: 'EU 48'}];

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
        console.log('event', event);
    }


    console.log('initial', initialClothes)

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
        console.log('eveeent', event);
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


    console.log('HUIPUTALA 1', clothes)
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
                                     console.log(rest, 'rest');
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
                                     console.log(rest, 'rest');
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