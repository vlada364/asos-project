import './App.css';
import Header from "./components/HeaderCategories/Header";
import {Route, Navigate, Routes, useLocation, useParams} from 'react-router'
import React, {useEffect} from "react";
import RegistrationForm from "./components/Registration/RegistrationForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import MyAccount from "./components/HeaderCategories/UserMenu/UsersInfo/MyAccount/MyAccount";
import UserStoreHelper from "./components/Registration/SelectDate/utils/UserStoreHelper";
import {setLoggedInUser} from "./common/redux/users/actions";
import BigPoster from "./components/HeaderCategories/UserMenu/UsersInfo/MyAccount/BigPoster";
import OrdersUsers from "./components/HeaderCategories/UserMenu/UsersInfo/UserOrders/OrdersUsers";
import UsersDetailsInfo from "./components/HeaderCategories/UserMenu/UsersInfo/UserDetails/UsersDetailsInfo";
import UsersChangePasswordForm
    from "./components/HeaderCategories/UserMenu/UsersInfo/UserChangePassword/UsersChangePasswordForm";
import UserAddressBook from "./components/HeaderCategories/UserMenu/UsersInfo/UserAddressBook/UserAddressBook";
import UserPaymentMethod from "./components/HeaderCategories/UserMenu/UsersInfo/UserPaymentMethod/UserPaymentMethod";
import UserContactPreferences
    from "./components/HeaderCategories/UserMenu/UsersInfo/UserContactPreferences/UserContactPreferences";
import ShowAddressesUser from "./components/HeaderCategories/UserMenu/UsersInfo/ShowAddressesUser/ShowAddressesUser";

import AddressDetailsView from "./components/HeaderCategories/UserMenu/UsersInfo/UserAddressBook/AddressDetailsView";
import Playground from "./components/Playground/Playground";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import ClothCreationForm from "./components/ClothCreationForm/ClothCreationForm";
import AdminPanel from "./components/adminPanel/AdminPanel";
import ShopList from "./components/shopList/ShopList";
import ClothPage from "./components/shopList/ClothPage/ClothPage";
import {addFavoriteItem, setFavoriteItems} from "./common/redux/clothes/actions";
import FavoriteClothes from "./components/FavoriteClothes/FavoriteClothes";
import ClothesStoreHelper from "./components/adminPanel/utils/ClothesStoreHelper";


function App() {
    const location = useLocation();
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    const emailAdmin = loggedInSer?.email_address;
    const isEmailAdmin = emailAdmin === 'admin@mail.ru'
    console.log('EMAAIL', isEmailAdmin)
    console.log('test', location, loggedInSer);
    const dispatch = useDispatch();
    const {getState} = useStore();

    const getUserByEmail = (email) => new Promise((resolve) => {
        UserStoreHelper.getUser(email, (user) => resolve(user));
    });

    const fetchData=async ()=>{
        // Мы это делаем чтобы перед выходом запомнить, какие вещи лайкнули
        window.onbeforeunload = () => {
            localStorage.setItem('favoriteClothes', getState().clothes.favoriteItems)
        }
        // тут мы достаем id которые мы лайкнули
        const favorites = localStorage.getItem('favoriteClothes');
        let ids = [];
        if (favorites) {
            // добавляем поочередно это айди
            ids = favorites.split(',').map(Number);
        }
        const email = localStorage.getItem('loggedUser');
        if (email) {
            const user=await getUserByEmail(email);
            dispatch(setLoggedInUser(user));
            ids = [...ids, ...(user.favorites || [])];
        }
        dispatch(setFavoriteItems(Array.from(new Set(ids))));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const param = useParams()
    console.log('MANIK', loggedInSer)
    const path = location.pathname;
    const isHeaderDisplayed = !path.includes('signin') && !path.includes('joinin') && !path.includes('myaccount') && !path.includes('playground') && !path.includes('/admin');

    return (<div className={'app'}>
        {isHeaderDisplayed && <Header/>}
        <main className={'main'}>
            <Routes>
                <Route path='/' element={<Navigate to={'/woman'}/>}/>
                <Route path='/woman' element={<MainPage/>}/>
                <Route path='/man' element={<MainPage/>}/>
                <Route path={'/admin'} element={<AdminPanel/>}>
                    <Route index element={<div> Манечка тут меню сделаешь</div>}/>
                    <Route path={'clothes'}>
                        <Route path={'create'} element={<ClothCreationForm/>}/>
                    </Route>
                </Route>
                <Route path='/clothcreation' element={<ClothCreationForm/>}/>
                <Route path={'/signin'} element={loggedInSer === null ? <RegistrationForm/> : <Navigate to={'/'}/>}/>
                <Route path={'/joinin'} element={loggedInSer === null ? <RegistrationForm/> : <Navigate to={'/'}/>}/>
                <Route path={'/signout'} element={<Navigate to={'/'}/>}/>
                <Route path={'/myaccount/'} element={loggedInSer === null ? <RegistrationForm/> : <MyAccount/>}>
                    <Route path={'myorders'} element={<OrdersUsers/>}/>
                    <Route path={'details'} element={<UsersDetailsInfo/>}/>
                    <Route path={'change-password'} element={<UsersChangePasswordForm/>}/>
                    <Route path={'addresses'} element={<ShowAddressesUser/>}>
                        <Route path={'add'} element={<UserAddressBook/>}/>
                        <Route index element={<AddressDetailsView/>}/>
                    </Route>
                    <Route path={'payment-methods'} element={<UserPaymentMethod/>}/>
                    <Route path={'contact-preferences'} element={<UserContactPreferences/>}/>
                    <Route index element={<BigPoster/>}/>
                </Route>
                <Route path={'/favorite-clothes'} element={<FavoriteClothes/>}/>
                <Route path={'/:gender/shop/:id'} element={<ClothPage/>}/>
                <Route path={'/:gender/shop/*'} element={<ShopList/>}/>
                <Route path={'/playground'} element={<Playground/>}/>
            </Routes>
        </main>
        {isHeaderDisplayed && <Footer/>}
    </div>)

}

export default App;
