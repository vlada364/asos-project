import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ClothesStoreHelper, {Cloth} from "../../adminPanel/utils/ClothesStoreHelper";
import style from './ClothPage.module.css';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import ClothDescription from "../ClothDescription/ClothDescription";
// import leftArrowImage from './img/left-arrow.png'

type Props = {};

const ClothPage: React.FC<Props> = () => {
    const params = useParams();
    const [cloth, setCloth] = useState<Cloth>();
    const [images, setImages] = useState([]);
    const [bigImage, setBigImage] = useState(0);


    useEffect(() => {
        const store = new ClothesStoreHelper()
        store.getClothById(params.id, function (cloth: Cloth) {

            setCloth(cloth);
            setImages(cloth.images.map((file) => URL.createObjectURL(file as unknown as File)))
        })
    }, []);


    if (!cloth || images.length === 0) {
        return <div>Loading...</div>
    }

    function clickImg(index) {
        setBigImage(index)
    }
  function scrollLeft(){
        if(bigImage===0){
            setBigImage(images.length-1)
        }else{
            setBigImage((prevState) => prevState-1)
        }
        console.log('Left')
  }
    function scrollRight(){
        if(bigImage===images.length-1){
            setBigImage(0)
        }else{
            setBigImage((prevState) => prevState+1)
        }
    }

    return <div className={style.clothPageContainer}>
        <div className={style.clothInfoContainer}>
            <div className={style.clothImages}>
                <div className={style.littleImages}>
                    {images.map((img, index) => (<img src={img} key={index} onClick={() => clickImg(index)}/>))}
                </div>
                <div className={style.bigImage}>
                    <img src={images[bigImage]}/>
                    <div className={style.scrollBtnBlock}>
                        <div onClick={scrollLeft}><img src={'/img/left-arrow.png'}/></div>
                        <div onClick={scrollRight}><img src={'/img/right-arrow-angle.png'}/></div>
                    </div>
                </div>
            </div>
            <ClothDescription name={cloth.clothes_name} price={cloth.price} colour={cloth.colour} sizes={cloth.sizes} id={cloth.id}/>
        </div>
    </div>
        ;
}

export default ClothPage;