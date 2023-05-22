import {Cloth} from "../../../components/adminPanel/utils/ClothesStoreHelper";

export type UserCheckboxes = {
    AsosPartners: boolean;
    DiscountsAndSales: boolean;
    NewStuff: boolean;
    YourExclusives: boolean;
}

export type User = {
    address?: string;
    addressTwoOptional?: string;
    city?: string;
    countryCode?: string;
    countyOptional?: string;
    countyOptionalSelect?: string;
    day: string;
    email_address: string;
    first_name: string;
    gender: string;
    last_name: string;
    mobile?: string;
    month: string;
    password: string;
    postCode?: string;
    stateOfCountryCode?: string;
    year: string;
    favorites?: number[]
} & UserCheckboxes;

export type SizesObj = { value: string, label: string }

export type BasketCloth = { name: string, color: string, id: any, price: string, size: SizesObj[] };

export type UserBasket = {
    quantity: number,
    size: Cloth['sizes'][number]
    cloth: BasketCloth
}[]