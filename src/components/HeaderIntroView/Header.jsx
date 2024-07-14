import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import Feature from '../Feature/Feature';
import Search from '../Search/search';


const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
    const dropdownRef = useRef(null); // Create a ref for the dropdown element

    // Handle clicks outside the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        
        document.addEventListener('click', handleClickOutside);

       
        return () => document.removeEventListener('click', handleClickOutside);
    }, []); 

    const dropdownFuture = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div className='row position-fixed w-100' style={{marginLeft: '0px'}}>
            <nav className="navbar">
                <div className="navbar-logo col-10">
                    <div className='' style={{ marginTop: '-2px' }}>
                        <img src={logo} alt='logo' />
                        <i> Hacks Learning</i>
                    </div>
                    <ul className="navbar-links">
                        <li onClick={dropdownFuture} style={{ cursor: 'pointer', }}>
                            <i className="fas fa-fire me-2"></i>
                            Tính năng
                            <i className="fas fa-angle-down me-3" style={{ fontSize: '10px' }}></i>
                        </li>

                        <li onClick={showModal} style={{ cursor: 'pointer' }} >
                            <i className="fas fa-search me-2"></i>
                            Tra cứu
                        </li>
                        <li onClick={dropdownFuture} style={{ cursor: 'pointer' }}>
                            <i className="fas fa-book me-2 ms-4"></i>
                            Hướng dẫn
                            <i className="fas fa-angle-down me-3" style={{ fontSize: '10px' }}></i>
                        </li>
                    </ul>
                </div>
                <div className="navbar-auth col-2" >
                    <Link to='/home'>
                    <button className='get_started'>
                        Bắt đầu ngay!
                    </button>
                    </Link>
                </div>
            </nav>
            <div className={`dropdown ${isDropdownVisible ? 'active' : ''}`}>
                <div className="dropdown-content">
                    <Feature />
                </div>
            </div>
                <Search  isVisible={isModalVisible} onClose={hideModal}/>


         
            
        </div>
    );
};

export default Navbar;
