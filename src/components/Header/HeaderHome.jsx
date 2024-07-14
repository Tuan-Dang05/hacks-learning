import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './header.scss';
import Search from '../Search/search';
const HeaderHome = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const showModal2 = () => {
        setModalVisible(true);
    };
    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logo} alt='logo' width={50} className='ms-3 me-3'></img>
                    <a className="navbar-brand fw-bold" href="/home"><i>Hacks learning</i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavLink to='/home'  style={{textDecoration: 'none'}}>
                            <li className="nav-link">
                                    <i class="fas fa-graduation-cap me-2"></i>
                                    Bảng học tập
                            </li>
                            </NavLink>
                            <li className="nav-link" onClick={showModal2} style={{ cursor: 'pointer' }} >

                                <i class="fas fa-search me-2 ms-3"></i>
                                Tra cứu điểm thi

                            </li>
                            <NavLink to='/home/statement' style={{textDecoration: 'none'}}>
                            <li className="nav-link">
                                    <i class="fas fa-scroll me-2 ms-3"></i>
                                    Báo cáo
                            </li>
                            </NavLink>
                            <li className="nav-item">
                                <a className="nav-link" href>
                                    <i class="fas fa-chart-line me-2 ms-3"></i>

                                    Phân tích dữ liệu</a>
                            </li>
                        </ul>
                    </div>
                    <Link to='/login'>
                    <button className='dang_nhap me-3'>Đăng nhập</button>
                    </Link>
                </div>
                <Search isVisible={isModalVisible} onClose={hideModal} />
            </nav>

        </div>
    );
}

export default HeaderHome;
