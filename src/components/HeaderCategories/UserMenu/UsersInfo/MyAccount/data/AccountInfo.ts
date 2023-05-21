import {HiOutlineUser, HiOutlineUsers} from "react-icons/hi";
import {AiOutlineInbox} from "react-icons/ai";
import {RiFileUserLine} from "react-icons/ri";
import {MdOutlineLock, MdOutlinePayment} from "react-icons/md";
import {BsHouse} from "react-icons/bs";
import {TbMessageDots} from "react-icons/tb";
import {FiHelpCircle} from "react-icons/fi";
import {IoIosSquareOutline} from "react-icons/io";
import {BiExit} from "react-icons/bi";
import {NameAndLinkAndIcon} from "../types/AccountType";
import {NameAndLabel} from "../../../../../ClothCreationForm/SelectSize/SelectSize";

export const infoForUser:NameAndLinkAndIcon[] = [{icon: HiOutlineUser, name: 'Account overview', link:'/myaccount'}, {
    icon: AiOutlineInbox,
    name: 'My orders',link:'myorders'
}, {icon: RiFileUserLine, name: 'My details',link:'details'}, {icon: MdOutlineLock, name: 'Change password',link:'change-password'},
    {icon: BsHouse, name: 'Address book',link:'addresses'},{icon: MdOutlinePayment, name: 'Payment methods',link:'payment-methods'}, {
        icon: TbMessageDots,
        name: 'Contact preferences',
        link:'contact-preferences'
    }, {icon: HiOutlineUsers, name: 'Social accounts',link:'social-accounts'},
    {icon: FiHelpCircle, name: 'Need help?',link:'customer-help'}, {
        icon: IoIosSquareOutline,
        name: `Where's my order?`,link:'delivery'
    }, {icon: IoIosSquareOutline, name: 'How do I make a return?',link:'returns-refunds'}, {
        icon: IoIosSquareOutline,
        name: 'I need a new returns note',link:'how-can-i-get-a-new-returns-slip'
    },
    {icon: BiExit, name: 'Sign out',link:'sign-out'}];

export const addInputsValueByCountry:NameAndLabel[]= [{label: 'ADDRESS:', name: 'address'}, {
    label: 'ADDRESS TWO:',
    name: 'addressTwoOptional'
}, {label: 'CITY:', name: 'city'},
    {label: 'COUNTY:', name: 'countyOptional'}, {label: 'POSTCODE:', name: 'postCode'}]

export const addressFinder:NameAndLabel[]= [{label: 'ADDRESS FINDER:', name: 'addressFinder'}]