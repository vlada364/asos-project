import './App.css';
import Header from "./components/HeaderCategories/Header";
import {Route, Navigate, Routes, useLocation, useParams} from 'react-router'
import React, {useEffect} from "react";
import RegistrationForm from "./components/Registration/RegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import MyAccount from "./components/HeaderCategories/UserMenu/UsersInfo/MyAccount/MyAccount";
import UserStoreHelper from "./components/Registration/SelectDate/utils/UserStoreHelper";
import {setLoggedInUser} from "./common/redux/users/actions";
import BigPoster from "./components/HeaderCategories/UserMenu/UsersInfo/MyAccount/BigPoster";
import OrdersUsers from "./components/HeaderCategories/UserMenu/UsersInfo/UserOrders/OrdersUsers";
import UsersDetailsInfo from "./components/HeaderCategories/UserMenu/UsersInfo/UserDetails/UsersDetailsInfo";
import UsersChangePasswordForm
    from "./components/HeaderCategories/UserMenu/UsersInfo/UserChangePassword/UsersChangePasswordForm";
import UserAddressBook from "./components/HeaderCategories/UserMenu/UsersInfo/UserAddressBook/UserAddressBook";
import UserPaymentMethod
    from "./components/HeaderCategories/UserMenu/UsersInfo/UserPaymentMethod/UserPaymentMethod";
import UserContactPreferences
    from "./components/HeaderCategories/UserMenu/UsersInfo/UserContactPreferences/UserContactPreferences";
import ShowAddressesUser from "./components/HeaderCategories/UserMenu/UsersInfo/ShowAddressesUser/ShowAddressesUser";
import {Link} from "react-router-dom";
import AddressesItems from "./components/HeaderCategories/UserMenu/UsersInfo/ShowAddressesUser/AddressesItems";
import AddressDetailsView from "./components/HeaderCategories/UserMenu/UsersInfo/UserAddressBook/AddressDetailsView";
import Playground from "./components/Playground/Playground";

function App() {
    const location = useLocation();
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    console.log('test', location, loggedInSer);
    const dispatch = useDispatch();


    useEffect(() => {
        const email = localStorage.getItem('loggedUser');
        if (email) {
            UserStoreHelper.getUser(email, (user) => {
                dispatch(setLoggedInUser(user))
            })
        }
    }, [])
    const param = useParams()
    console.log('param', param)
    const path = location.pathname;
    return (<div>
        {!path.includes('signin') && !path.includes('joinin') && !path.includes('myaccount') && !path.includes('playground') &&
            <Header/>}
        <main>
            <Routes>
                <Route path='/' element={<Navigate to={'/woman'}/>}/>
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
                <Route path={'/playground'} element={<Playground/>}/>
            </Routes>
        </main>
    </div>)

}

export default App;
