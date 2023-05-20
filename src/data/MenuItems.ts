import {
    ClothWithTitleAndNameAndType,
    ClothWithTitleDisplayTagsAndId,
    ImageClothWithTitleAndNameAndType,
    ImageClothWithTitleDisplayTags
} from "./HeaderClothTypes/HeaderClothTypes";
import {
    clothesCategorySportsWearFour,
    clothesCategorySportsWearOne,
    clothesCategorySportsWearThree,
    clothesCategorySportsWearTwo,

    clothesCategoryTopShopOne,
    clothesCategoryTopShopThree,
    clothesCategoryTopShopTwo,

    clothesCategoryWinterFour,
    clothesCategoryWinterOne,
    clothesCategoryWinterThree,
    clothesCategoryWinterTwo
} from "./menuHeader/menuHeader";
import './menuHeader/categoryItemsGridColumns';
import {clothesCategory,clothesCategoryClothingOne,
    clothesCategoryClothingThree,
    clothesCategoryClothingTwo,
    clothesCategoryDressesFour,
    clothesCategoryDressesOne,
    clothesCategoryDressesThree,
    clothesCategoryDressesTwo,clothesCategoryNewInOne,
    clothesCategoryNewInThree,
    clothesCategoryNewInTwo,
    clothesCategoryNewYearFour,
    clothesCategoryNewYearOne,
    clothesCategoryNewYearThree,
    clothesCategoryNewYearTwo,clothesCategoryThree,clothesCategoryTwo,} from './menuHeader/menuHeaderClothes';
import {clothesCategoryShoesOne,
    clothesCategoryShoesThree,
    clothesCategoryShoesTwo} from './menuHeader/menuHeaderShoesCategory';

import { clothesCategoryAccessoriesFour,
    clothesCategoryAccessoriesOne,
    clothesCategoryAccessoriesThree,
    clothesCategoryAccessoriesTwo,} from './menuHeader/menuHeaderAccessoriesCategory';

import { clothesCategoryOutletOne,
    clothesCategoryOutletThree,
    clothesCategoryOutletTwo,clothesCategoryBrandsOne,
    clothesCategoryBrandsThree,
    clothesCategoryBrandsTwo,} from './menuHeader/menuHeaderOutletAndBrandsCategory';
import {  clothesCategoryFaceBodyFour,
    clothesCategoryFaceBodyOne,
    clothesCategoryFaceBodyThree,
    clothesCategoryFaceBodyTwo,} from './menuHeader/menuHeaderFaceBodyCategory';


type FirstHeaderPage =
    [ClothWithTitleAndNameAndType, ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
type SecondHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
type ThirdHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>
export type FourthHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
export type FifthHeaderPage =
    [ClothWithTitleDisplayTagsAndId, ImageClothWithTitleDisplayTags, ImageClothWithTitleDisplayTags, ImageClothWithTitleDisplayTags]
    & Partial<GridColumns>;
export type SixthHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
export type SeventhHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
export type EighthHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
export type NinthHeaderPage =
    [ClothWithTitleAndNameAndType, ClothWithTitleAndNameAndType, ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>
export type TenthHeaderPage =
    [ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>
export type EleventhHeaderPage =
    [ClothWithTitleAndNameAndType, ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>
export type TwelfthHeaderPage =
    [ClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType, ImageClothWithTitleAndNameAndType]
    & Partial<GridColumns>;
export type ThirteenthHeaderPage = TwelfthHeaderPage
export type GridColumns = { gridColumns: string };

export type CategoryItemsMap = {
    1: FirstHeaderPage, 2: SecondHeaderPage, 3: ThirdHeaderPage, 4: FourthHeaderPage, 5: FifthHeaderPage, 6: SixthHeaderPage, 7: SeventhHeaderPage,
    8: EighthHeaderPage, 9: NinthHeaderPage, 10: TenthHeaderPage, 11: EleventhHeaderPage, 12: TwelfthHeaderPage, 13: ThirteenthHeaderPage, 14: []
};
export const categoryItemsMap: CategoryItemsMap = {
    1: [clothesCategory, clothesCategoryTwo, clothesCategoryThree],
    2: [clothesCategoryNewInOne, clothesCategoryNewInTwo, clothesCategoryNewInThree],
    3: [clothesCategoryNewYearOne, clothesCategoryNewYearTwo, clothesCategoryNewYearThree, clothesCategoryNewYearFour],
    4: [clothesCategoryClothingOne, clothesCategoryClothingTwo, clothesCategoryClothingThree],
    5: [clothesCategoryDressesOne, clothesCategoryDressesTwo, clothesCategoryDressesThree, clothesCategoryDressesFour],
    6: [clothesCategoryShoesOne, clothesCategoryShoesTwo, clothesCategoryShoesThree],
    7: [clothesCategorySportsWearOne, clothesCategorySportsWearTwo, clothesCategorySportsWearThree, clothesCategorySportsWearFour],
    8: [clothesCategoryAccessoriesOne, clothesCategoryAccessoriesTwo, clothesCategoryAccessoriesThree, clothesCategoryAccessoriesFour],
    9: [clothesCategoryWinterOne, clothesCategoryWinterTwo, clothesCategoryWinterThree, clothesCategoryWinterFour],
    10: [clothesCategoryTopShopOne, clothesCategoryTopShopTwo, clothesCategoryTopShopThree],
    11: [clothesCategoryFaceBodyOne, clothesCategoryFaceBodyTwo, clothesCategoryFaceBodyThree, clothesCategoryFaceBodyFour],
    12: [clothesCategoryBrandsOne, clothesCategoryBrandsTwo, clothesCategoryBrandsThree],
    13: [clothesCategoryOutletOne, clothesCategoryOutletTwo, clothesCategoryOutletThree],
    14: []
}
export const title = {
    1: ['Shop by product', 'Shop by edit', 'Shop sale by body fit'],
    2: ['New products', 'Shop by body fit', 'New edits'],
    3: ['Shop by product', 'Shop by edit', 'Gifting', 'Shop by colour'],
    4: ['Shop by product', 'Shop by body fit', 'Shop by edit'],
    5: ['Shop by type', 'Trending now', 'Shop by body feet'],
    6: ['Shop by product', 'Shop by brand'],
    7: ['Shop by product', 'Shop by activity', 'Shop by brand'],
    8: ['Shop by product', 'Shop by bags', 'Shop by jewellery'],
    9: ['Shop by product', 'Coats & Jackets', 'Tops', 'Shoes & Boots'],
    10: ['Shop by product'],
    11: ['Shop by product', 'Shop by brand'],
    12: ['Top brands'],
    13: ['Shop by product', 'Shop by body fit'],
};


export enum HEADER_BLOCK_TYPE {
    LIST_TYPE = 'list',
    IMAGE_LIST = 'image-list',
    BIG_IMAGE_LIST = 'big-image-list',
    LONG_LIST_IMAGE = 'long-list-image',
    BIG_IMAGE_COLUMN = 'big-image-column'

}

export const LIST_TYPE = HEADER_BLOCK_TYPE.LIST_TYPE;
export const IMAGE_LIST = HEADER_BLOCK_TYPE.IMAGE_LIST;

export const BIG_IMAGE_LIST = HEADER_BLOCK_TYPE.BIG_IMAGE_LIST;

export const LONG_LIST_IMAGE = HEADER_BLOCK_TYPE.LONG_LIST_IMAGE;

export const BIG_IMAGE_COLUMN = HEADER_BLOCK_TYPE.BIG_IMAGE_COLUMN;

clothesCategory.title = title[1][0];
clothesCategory.type = LIST_TYPE;

clothesCategoryTwo.title = title[1][1];
clothesCategoryTwo.type = LIST_TYPE;

clothesCategoryThree.title = title[1][2];
clothesCategoryThree.type = IMAGE_LIST;

clothesCategoryNewInOne.title = title[2][0];
clothesCategoryNewInOne.type = LIST_TYPE;

clothesCategoryNewInTwo.title = title[2][1];
clothesCategoryNewInTwo.type = IMAGE_LIST;

clothesCategoryNewInThree.title = title[2][2];
clothesCategoryNewInThree.type = BIG_IMAGE_LIST;

clothesCategoryNewYearOne.title = title[3][0];
clothesCategoryNewYearOne.type = LIST_TYPE;

clothesCategoryNewYearTwo.title = title[3][1];
clothesCategoryNewYearTwo.type = LONG_LIST_IMAGE;

clothesCategoryNewYearThree.title = title[3][2];
clothesCategoryNewYearThree.type = IMAGE_LIST;

clothesCategoryNewYearFour.title = title[3][3];
clothesCategoryNewYearFour.type = BIG_IMAGE_COLUMN;

clothesCategoryClothingOne.title = title[4][0];
clothesCategoryClothingOne.type = LIST_TYPE;

clothesCategoryClothingTwo.title = title[4][1];
clothesCategoryClothingTwo.type = IMAGE_LIST;

clothesCategoryClothingThree.title = title[4][2];
clothesCategoryClothingThree.type = LONG_LIST_IMAGE;

clothesCategoryDressesOne.title = title[5][0];
clothesCategoryDressesOne.type = LIST_TYPE;

clothesCategoryDressesTwo.title = title[5][1];
clothesCategoryDressesTwo.type = LONG_LIST_IMAGE;

clothesCategoryDressesThree.title = title[5][2];
clothesCategoryDressesThree.type = IMAGE_LIST

clothesCategoryDressesFour.title = '';
clothesCategoryDressesFour.type = BIG_IMAGE_COLUMN;

clothesCategoryShoesOne.title = title[6][0];
clothesCategoryShoesOne.type = LIST_TYPE;

clothesCategoryShoesTwo.title = title[6][1];
clothesCategoryShoesTwo.type = LONG_LIST_IMAGE;

clothesCategoryShoesThree.title = '';
clothesCategoryShoesThree.type = BIG_IMAGE_LIST;

clothesCategorySportsWearOne.title = title[7][0];
clothesCategorySportsWearOne.type = LIST_TYPE;

clothesCategorySportsWearTwo.title = title[7][1];
clothesCategorySportsWearTwo.type = LONG_LIST_IMAGE;

clothesCategorySportsWearThree.title = title[7][2];
clothesCategorySportsWearThree.type = LONG_LIST_IMAGE;

clothesCategorySportsWearFour.title = '';
clothesCategorySportsWearFour.type = BIG_IMAGE_COLUMN;

clothesCategoryAccessoriesOne.title = title[8][0];
clothesCategoryAccessoriesOne.type = LIST_TYPE;

clothesCategoryAccessoriesTwo.title = title[8][1];
clothesCategoryAccessoriesTwo.type = LONG_LIST_IMAGE;

clothesCategoryAccessoriesThree.title = title[8][2];
clothesCategoryAccessoriesThree.type = LONG_LIST_IMAGE;

clothesCategoryAccessoriesFour.title = '';
clothesCategoryAccessoriesFour.type = BIG_IMAGE_LIST;

clothesCategoryWinterOne.title = title[9][0];
clothesCategoryWinterOne.type = LIST_TYPE;

clothesCategoryWinterTwo.title = title[9][1];
clothesCategoryWinterTwo.type = LIST_TYPE;

clothesCategoryWinterThree.title = title[9][2];
clothesCategoryWinterThree.type = LIST_TYPE;

clothesCategoryWinterFour.title = title[9][3];
clothesCategoryWinterFour.type = LONG_LIST_IMAGE;

clothesCategoryTopShopOne.title = title[10][0];
clothesCategoryTopShopOne.type = LONG_LIST_IMAGE;

clothesCategoryTopShopTwo.title = '';
clothesCategoryTopShopTwo.type = BIG_IMAGE_COLUMN;

clothesCategoryTopShopThree.title = '';
clothesCategoryTopShopThree.type = BIG_IMAGE_COLUMN;

clothesCategoryFaceBodyOne.title = title[11][0];
clothesCategoryFaceBodyOne.type = LIST_TYPE;

clothesCategoryFaceBodyTwo.title = title[11][1];
clothesCategoryFaceBodyTwo.type = LIST_TYPE;

clothesCategoryFaceBodyThree.title = '';
clothesCategoryFaceBodyThree.type = BIG_IMAGE_COLUMN;

clothesCategoryFaceBodyFour.title = '';
clothesCategoryFaceBodyFour.type = BIG_IMAGE_COLUMN;

clothesCategoryBrandsOne.title = title[12][0];
clothesCategoryBrandsOne.type = LIST_TYPE;

clothesCategoryBrandsTwo.title = '';
clothesCategoryBrandsTwo.type = BIG_IMAGE_COLUMN;

clothesCategoryBrandsThree.title = '';
clothesCategoryBrandsThree.type = BIG_IMAGE_COLUMN;

clothesCategoryOutletOne.title = title[13][0];
clothesCategoryOutletOne.type = LIST_TYPE;

clothesCategoryOutletTwo.title = title[13][1];
clothesCategoryOutletTwo.type = IMAGE_LIST;

clothesCategoryOutletThree.title = '';
clothesCategoryOutletThree.type = BIG_IMAGE_COLUMN;
//



