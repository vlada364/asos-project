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
import OrdersUsers from "./components/HeaderCategories/UserMenu/UsersInfo/MyAccount/OrdersUsers";
import UsersDetailsInfo from "./components/HeaderCategories/UserMenu/UsersInfo/UserDetails/UsersDetailsInfo";
import UsersChangePasswordForm
    from "./components/HeaderCategories/UserMenu/UsersInfo/UserChangePassword/UsersChangePasswordForm";
import UserAddressBook from "./components/HeaderCategories/UserMenu/UsersInfo/UserAddressBook/UserAddressBook";
import UserPaymentMethod
    from "./components/HeaderCategories/UserMenu/UsersInfo/MyAccount/UserPaymentMethod/UserPaymentMethod";

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

    return (<div>
        {!location.pathname.includes('signin') && !location.pathname.includes('joinin') && !location.pathname.includes('myaccount') &&
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
                    <Route path={'address-book'} element={<UserAddressBook/>}/>
                    <Route path={'payment-methods'} element={<UserPaymentMethod/>}/>
                    <Route index element={<BigPoster/>}/>
                </Route>
            </Routes>
        </main>
    </div>)

}

export default App;
