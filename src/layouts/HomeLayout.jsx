import React, { Component } from 'react';
import HeaderHome from '../components/Header/HeaderHome';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
class HomeLayout extends Component {
    render() {
        return (
            <div>
                <div className='app-header position-fixed w-100 top-0' style={{zIndex: '9999'}}>
                <HeaderHome/>
                </div>
                <div className='app-content'>
                    <Outlet/>
                </div>
                <div className='app-footer'>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default HomeLayout;
