import {HEADER_BLOCK_TYPE} from "../MenuItems";

export type Id = {
    id: number
}

export type Path = {
    path: string
}

export type Name = {
    name: string
}
export type Title = {
    title: string
}
export type Type = {
    type: HEADER_BLOCK_TYPE;
}
export type HeaderClothWithPath = Name & Id & Path & TypeAndTitle;
export type DisplayTags = {
    displayTags: string[]
}

export type ImageSrc = {
    image: string
}

export type HeaderClothWithPathAndTags = HeaderClothWithPath & DisplayTags & TypeAndTitle;
export type HeaderClothWithPathAndTagsAndImage = DisplayTags & ImageSrc & Name & Path & TypeAndTitle;
export type ClothNameWithId = Name & Id & TypeAndTitle;
export type ClothWithImages = Name & ImageSrc & Partial<Id> & TypeAndTitle;
export type TypeAndTitle = Partial<Title> & Partial<Type>;

export type ClothWithTitleAndNameAndType = ClothNameWithId[] & TypeAndTitle;
export type ClothWithTitleDisplayTagsAndId = HeaderClothWithPathAndTags[] & TypeAndTitle;
export type ImageClothWithTitleAndNameAndType = ClothWithImages[] & TypeAndTitle;
export type ImageClothWithTitleDisplayTags = HeaderClothWithPathAndTagsAndImage[] & TypeAndTitle