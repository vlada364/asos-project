import React from 'react';
import styles from './SaleItem.module.css'
import ItemWrapper from "./ItemWrapper";
import TypeImageList from './TypeImageList';
import TypeList from "./TypeList";
import TypeBigImageList from "./TypeBigImageList";
import TypeLongListImage from "./TypeLongListImage";

const SaleItem = (props) => {
    console.log(props.categoryItems)

    return (<div className={styles.containerItem} style={{gridTemplateColumns: props.categoryItems.gridColumns}}>
        {props.categoryItems.map((list) => {
            console.log('kek', list)
            if (list.type === 'image-list') {
                return <ItemWrapper title={list.title}>
                    <ul className={styles.listImage}>
                        {list.map(el => <TypeImageList id={el.id} key={el.id} src={el.image} name={el.name} path={el.path} dislayTags={el.displayTags}/>)}
                    </ul>
                </ItemWrapper>
            }

            if (list.type === 'list') {
                return <ItemWrapper title={list.title}>
                    <ul className={styles.ulTitleSale}>
                        {list.map(el => <TypeList id={el.id} key={el.id} name={el.name} path={el.path} dislayTags={el.displayTags}/>)}
                    </ul>
                </ItemWrapper>;
            }
            if (list.type === 'big-image-list') {
                return <ItemWrapper title={list.title}>
                    <ul className={styles.bigListImage}>
                        {list.map(el => <TypeBigImageList id={el.id} key={el.id} name={el.name} image={el.image} path={el.path} dislayTags={el.displayTags}/>)}
                    </ul>
                </ItemWrapper>;
            }
            if (list.type === 'long-list-image') {
                return <ItemWrapper title={list.title}>
                    <ul className={styles.listSixImage}>
                        {list.map(el => <TypeLongListImage id={el.id} key={el.id} image={el.image} name={el.name} path={el.path} dislayTags={el.displayTags}/>)}
                    </ul>
                </ItemWrapper>;
            }
            if (list.type === 'big-image-column') {
                return <ItemWrapper title={list.title}>
                    <ul className={styles.bigImageColumn}>
                        {list.map(el => <TypeBigImageList id={el.id} key={el.id} name={el.name} image={el.image} path={el.path} displayTags={el.displayTags}/>)}
                    </ul>
                </ItemWrapper>;
            }
            return null;

        })

        }

    </div>
);

}

export default SaleItem;