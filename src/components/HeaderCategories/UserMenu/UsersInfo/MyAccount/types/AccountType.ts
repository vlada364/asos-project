import {Name} from "../../../../../../data/HeaderClothTypes/HeaderClothTypes";
import {IconType} from "react-icons";
import {jsx} from "@emotion/react";
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;


export type Link={
    link:string
}
export type Icon={
    icon:IconType
}

export type Title={
    title:string
}


export type LinksTo={
    linksTo:string
}

export type NameAndLinkAndIcon=Link&Icon&Name