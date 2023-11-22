import React, {useState} from 'react';
import './App.scss';
import star from './assets/star.png'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Dc from "./components/Dc/Dc";


function App() {
    const [switcher, setSwitcher]
        = useState<string>('home')
    return (
        <div className="app">
            <div className="burger"></div>
            <aside>
                <div className="aside__title"><span>Furniture AR</span></div>
                <div className="aside_subtitle">Популярные категории</div>
                <div className="aside_categories categories">
                    <NavLink to={'/'}>
                        <div className={switcher === "home" ? `category active` : `category`}
                             onClick={() => setSwitcher('home')}>
                            <img src={star} alt="star"/>
                            <span>Диваны</span>

                        </div>
                    </NavLink>
                    <NavLink to={'/dc'}>
                        <div className={switcher === "dc" ? `category active` : `category`}
                             onClick={() => setSwitcher('dc')}>
                            <img src={star} alt="star"/>

                            <span>Комоды и тумбы</span>
                        </div>
                    </NavLink>
                </div>
            </aside>
            <main>

                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/dc'} element={<Dc/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
