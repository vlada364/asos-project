import React from 'react';

type Props = {img:string};

const BrandsRow: React.FC<Props> = ({img}) => {
    return <div>
        <div><img src={img} style={{width:'193px'}}/></div>
    </div>;
}

export default BrandsRow;