import React, {useState, useEffect, useMemo} from 'react';
import FormTextInput from "../Registration/FormTextInput/FormTextInput";
import styles from "../Registration/RegistrationForm.module.css";
import ImageUploader from 'react-images-upload';
import ImagesAdded from "./ImagesAdded/ImagesAdded";
import adminPanel from '../adminPanel/AdminPanel.module.css';
import SelectSize from '../ClothCreationForm/SelectSize/SelectSize'
import Select from 'react-select';
import ClothesStoreHelper, {Cloth} from "../adminPanel/utils/ClothesStoreHelper";
import {clothesInfo,categoriesArray, sizesArray, genderArr} from "./utils/ClothesInfo";


type Props = {};

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

const ClothCreationForm: React.FC<Props> = () => {

    const [inputsValue, setInputStateValue] = useState({clothes_name: "", price: '', colour: '',gender:''});
    const [files, setFiles] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [gender,setGender]=useState<ArrayElement<typeof genderArr>>(genderArr[0])

    console.log(files, 'filesArray')

    function handleSubmit(e) {
        e.preventDefault()
        const formValues: Cloth = {
            ...inputsValue,
            images: [...files],
            sizes,
            categories,
            gender:gender.value
        };
        console.log(formValues, 'FORM VALUES TARGET');
        const isClothInformationValid = inputsValue.clothes_name !== '' && inputsValue.price !== '' && inputsValue.colour !== ''
        if (isClothInformationValid && files.length !== 0 && sizes.length !== 0 && categories.length !== 0) {
            const obj = new ClothesStoreHelper();
            setCategories([]);
            setSizes([])
            setFiles([])
            setInputStateValue({clothes_name: "", price: '', colour: '',gender:''})
            obj.addClothes(formValues, () => {
            }, () => {
            });
        }
    }


    function onDrop(e) {
        console.log(e, 'eeee')
        setFiles([...e])
        console.log(files, 'files')
    }

    function handleChangeInput({target: {name, value}}) {
        setInputStateValue(prevState => ({...prevState, [name]: value}));
    }

    const imageUrls = useMemo(() => {
        return [...files.map((file) => URL.createObjectURL(file))]
    }, [files]);

    function deleteImg(e: number) {
        // imageUrls.map((url)=>console.log(e.currentTarget.id===url))
        setFiles((imageUrls) => imageUrls.filter((url, index) => index !== e))
    }

    function selectSize(event) {
        console.log(event, 'event')

        setSizes(event)
    }

    function selectCategory(event) {
        setCategories(event)
    }
    function selectGender(event){
        setGender(event)
        console.log(event,'EVENT')
    }

    return <div className={styles.registrationForm}>
        <div className={adminPanel.imagesAdded}>
            {imageUrls.map((url, index) => (
                <ImagesAdded url={url} deleteImg={() => deleteImg(index)}/>))}
        </div>
        <div className={adminPanel.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit} style={{width: '655px'}}>

                <label className={styles.nameLabel}>IMAGES:</label>
                <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={(e) => onDrop(e)}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                {clothesInfo.map(el => (<FormTextInput label={el.label} name={el.name} value={inputsValue[el.name]}
                                                       tooltipText={''} type={''} id={'1'} hint={undefined}
                                                       handleChangeInput={handleChangeInput}/>))}
                <label className={styles.nameLabel}>GENDER:</label>
                <Select
                    options={genderArr}
                        onChange={selectGender}
                        value={gender}
                        closeMenuOnSelect={false}
                        className="basic-single"
                        classNamePrefix="select"
                    isSearchable={false}
                />
                <label className={styles.nameLabel}>SIZE:</label>
                <Select isMulti
                        options={sizesArray}
                        onChange={selectSize}
                        value={sizes}
                        className="basic-multi-select"
                        closeMenuOnSelect={false}
                        classNamePrefix="select" menuPlacement={'auto'}/>
                <label className={styles.nameLabel}>CATEGORIES:</label>
                <Select isMulti
                        options={categoriesArray}
                        onChange={selectCategory}
                        value={categories}
                        className="basic-multi-select"
                        closeMenuOnSelect={false}
                        classNamePrefix="select" menuPlacement={'auto'}/>
                <button type='submit' className={adminPanel.btnAddClothes}>Add clothes</button>
            </form>
        </div>
    </div>;
}

export default ClothCreationForm;