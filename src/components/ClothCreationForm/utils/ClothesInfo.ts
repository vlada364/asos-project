export type LabelAndName={
    name:string,
    label:string,
}
export type ValueAndLabel={
    value:string,
    label:string
}

export const clothesInfo:LabelAndName[]= [{name: 'clothes_name', label: 'CLOTHES NAME:'}, {name: 'colour', label: 'COLOUR:'}, {
    name: 'price',
    label: 'PRICE'
}]

export const sizesArray:ValueAndLabel[]= [{value: 'eu_32', label: 'EU 32'}, {value: 'eu_34', label: 'EU 34'}, {
    value: 'eu_36',
    label: 'EU 36'
}, {value: 'eu_38', label: 'EU 38'},
    {value: 'eu_40', label: 'EU 40'}, {value: 'eu_42', label: 'EU 42'}, {value: 'eu_44', label: 'EU 44'}, {
        value: 'eu_46',
        label: 'EU 46'
    }, {value: 'eu_48', label: 'EU 48'}]

export const categoriesArray:ValueAndLabel[]= [{value: 'Clothing', label: 'Clothing'}, {value: 'Shoes', label: 'Shoes'}, {
    value: 'Dresses',
    label: 'Dresses'
},
    {value: 'Coats&Jackets', label: 'Coats & Jackets'}, {value: 'Tops', label: 'Tops'}, {
        value: 'Sportswear',
        label: 'Sportswear'
    },
    {value: 'Jumpers&Cardigans', label: 'Jumpers & Cardigans'}, {
        value: 'Tracksuits&Joggers',
        label: 'Tracksuits & Joggers'
    },
    {value: 'Blazers', label: 'Blazers'}, {value: 'CargoTrousers', label: 'Cargo Trousers'}, {
        value: 'Trainers',
        label: 'Trainers'
    },
    {value: 'Boots', label: 'Boots'}, {value: 'FlatShoes', label: 'Flat shoes'}, {
        value: 'Heels',
        label: 'Heels'
    }, {value: 'Loafers', label: 'Loafers'}, {value: 'RunningTrainers', label: 'Running Trainers'},
    {value: 'Sandals', label: 'Sandals'}];
export const genderArr:ValueAndLabel[]=[{value:'woman',label:'woman'},{value:'man',label:'man'}];