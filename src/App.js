import './App.css';
import Header from "./components/HeaderCategories/Header";
import {Router, Route, Navigate, Routes, useLocation} from 'react-router'
import React from "react";
import RegistrationForm from "./components/Registration/RegistrationForm";

function App() {
    const location = useLocation();
    console.log('test', location)

    return (<div>
        {!location.pathname.includes('signin') && !location.pathname.includes('joinin') && <Header/>}
        <main>
            <Routes>
                <Route path='/' element={<Navigate to={'/woman'}/>}/>
                <Route path={'/signin'} element={<RegistrationForm/>}/>
                <Route path={'/joinin'} element={<RegistrationForm/>}/>
            </Routes>
        </main>
    </div>)

}

export default App;
