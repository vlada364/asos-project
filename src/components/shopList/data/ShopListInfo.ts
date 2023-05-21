import {ValueAndLabel} from "../../ClothCreationForm/utils/ClothesInfo";
import { ValueAndLabelAndColor} from '../types/ShopListTypes'

export const selectSort: ValueAndLabel[] = [{value: 'PriceHighToLow', label: 'Price high to low'},
    {value: 'PriceLowToHigh', label: 'Price low to high'}]

export const selectByColor: ValueAndLabelAndColor[] = [{value: 'Multi', label: 'Multi', color: 'E5E5E4'}, {
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

export const selectSize:ValueAndLabel[]= [{value: 'eu_32', label: 'EU 32'}, {value: 'eu_34', label: 'EU 34'}, {
    value: 'eu_36',
    label: 'EU 36'
}, {value: 'eu_38', label: 'EU 38'},
    {value: 'eu_40', label: 'EU 40'}, {value: 'eu_42', label: 'EU 42'}, {value: 'eu_44', label: 'EU 44'}, {
        value: 'eu_46',
        label: 'EU 46'
    }, {value: 'eu_48', label: 'EU 48'}];