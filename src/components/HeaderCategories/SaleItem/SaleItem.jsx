import React from 'react';
import styles from './SaleItem.module.css'

const SaleItem = (props) => {
    console.log(props.categoryItems)

    return (<div className={styles.containerItem} style={{gridTemplateColumns: props.categoryItems.gridColumns}}>
        {props.categoryItems.map((list) => {
            console.log('kek', list)
            if (list.type === 'image-list') {
                return <div className={styles.titleSale}>
                    <div className={styles.titleList}><span>{list.title}</span></div>
                    <ul className={styles.listImage}>
                        {list.map(el => {
                            return (<li id={el.id} key={el.id} className={styles.titleImage}>
                                <div><img
                                    src={el.image}/></div>
                                <div><span>{el.name}</span></div>
                            </li>)
                        })}
                    </ul>
                </div>;
            }

            if (list.type === 'list') {
                return <div className={styles.titleSale}>
                    <div className={styles.titleList}><span>{list.title}</span></div>
                    <ul className={styles.ulTitleSale}>
                        {list.map(el => {
                            return (<li className={styles.listLi} id={el.id} key={el.id}>{el.name}</li>)
                        })}
                    </ul>
                </div>;
            }
            if (list.type === 'big-image-list') {
                return <div className={styles.titleSale}>
                    <div className={styles.titleList}><span>{list.title}</span></div>
                    <ul className={styles.bigListImage}>
                        {list.map(el => {
                            return (<li id={el.id} key={el.id}>
                                <div className={styles.listBigImage}>
                                    <div className={styles.bigImageContainer}>
                                        <img src={el.image}/>
                                    </div>
                                    <div className={styles.bigImageSpan}><span>{el.name}</span></div>
                                    <div className={styles.imageGradient}></div>
                                </div>
                            </li>)
                        })}
    </ul>
</div>
    ;
}
    if (list.type === 'long-list-image') {
        return <div className={styles.titleSale}>
            <div className={styles.titleList}><span>{list.title}</span></div>
            <ul className={styles.listSixImage}>
                {list.map(el => {
                    return (<li id={el.id} key={el.id} className={styles.titleImage}>
                        <div className={styles.listInline}>
                            <div className={"highlight-image"}><img
                                src={el.image}/></div>
                            <div className={styles.lineSpan}><span>{el.name}</span>
                                <div className={styles.line}></div>
                            </div>

                        </div>
                    </li>)
                })}
            </ul>
        </div>
            ;
    }
    if (list.type === 'big-image-column') {
        return <div className={styles.titleSale}>
            <div className={styles.titleList}><span>{list.title}</span></div>
            <ul className={styles.bigImageColumn}>
                {list.map(el => {
                    return (<li id={el.id} key={el.id} className={styles.imageBig}>
                        <div className={styles.bigColumnContainer}>
                            <div><img
                                src={el.image}/></div>
                            <div className={styles.bigImageTitle}><span>{el.name}</span></div>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
            ;
    }
    return null;

})

}

</div>)
;

}

export default SaleItem;