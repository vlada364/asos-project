import './App.css';
import Header from "./components/Header";
import {render} from 'react-dom';
import {Router, Route, Navigate, Routes} from 'react-router'
import React from "react";
import MenuLink from './components/MenuLink'
import CategoryHeader from "./components/CategoryHeader/CategoryHeader";
import {menuItems} from './data/MenuItems'

function App() {

    return (<div>
        <Header />

        <main>
            <Routes>
                <Route path='/' element={<Navigate to={'/woman'}/>}/>
            </Routes>
        </main>
    </div>)

}

export default App;
