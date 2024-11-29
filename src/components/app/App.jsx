import React from 'react';
import {presetGpnDefault, Theme} from '@consta/uikit/Theme';
import {Responses404} from '@consta/uikit/Responses404';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../../pages/main-page/MainPage";
import ServiceDetailPage from "../../pages/service-detail-page/ServiceDetailPage";
import ServicePage from "../../pages/service-page/ServicePage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LoginPage from "../../pages/login-page/LoginPage";


const App = function () {
    return (
        <Theme preset={presetGpnDefault} style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "space-between", paddingRight: "100px", paddingLeft: "100px" }}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage/>}></Route>
                        <Route path="services" element={<ServicePage/>}></Route>
                        <Route path='services/:id' element={<ServiceDetailPage/>}></Route>
                        <Route path='login' element={<LoginPage/>}></Route>
                        {/*<Route path={`${AppRoute.service}/:id`} element={<ServiceDetailPage/>}></Route>*/}
                    </Route>
                    <Route path='*' element={<Responses404 className='test'/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Theme>
    )
}


export default App;
