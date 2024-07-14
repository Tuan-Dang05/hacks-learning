import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './footer.scss';
class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <footer className="footer mt-5 bg-light text-dark">
                    <div className="container">
                        <div className="row footer_content">
                            <div className="col-md-4">
                                <div className="logo">
                                    <img src={logo} alt="logo" width={50} className="logo_footer" />
                                    <span className="fs-3 ms-3 fw-medium"><i>Hacks learning</i></span>
                                </div>
                                <p className='mt-3'>
                                Hacks Learning là nền tảng giáo dục trực tuyến tiên tiến, cung cấp cho bạn những khóa học chất lượng cao. Với phương pháp giảng dạy hiện đại, tập trung vào thực hành, Hacks Learning sẽ giúp bạn học nhanh, nhớ lâu và chinh phục mọi kỳ thi một cách hiệu quả.
                                </p>
                                <a href="https://maps.app.goo.gl/drce9eEJHLahDCJ56" target="_blank">
                                    <div className="button-icon" style={{ marginTop: 50 }}>
                                        <div className="icon_location">
                                            <i className="fa-solid fa-location-dot location" />
                                        </div>
                                        <div className="cube">
                                            <span className="side front">Location</span>
                                            <span className="side top">Open map</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-8 row">
                                <div className="col-md-4">
                                    <h5 className="quick_link">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <Link to="/login" className="tree__action sidebar__action">
                                            <span aria-current="page" className="tree__link nuxt-link-exact-active nuxt-link-active">
                                                <i className="tree__icon fa-solid fa-house" />
                                                <span className="tree__link-text"><span className="sidebar__item-name">Quản lý</span></span>
                                            </span>
                                        </Link>
                                        <router-link to="/richnote/0" className="tree__action sidebar__action">
                                            <span aria-current="page" className="tree__link nuxt-link-exact-active nuxt-link-active">
                                                <i className="tree__icon fa-solid fa-pen" />
                                                <span className="tree__link-text"><span className="sidebar__item-name">Tra cứu
                                                    </span></span>
                                            </span>
                                        </router-link>
                                        <router-link to="/tasklists/0" className="tree__action sidebar__action">
                                            <span aria-current="page" className="tree__link nuxt-link-exact-active nuxt-link-active">
                                                <i className="tree__icon fa-solid fa-list-check" />
                                                <span className="tree__link-text"><span className="sidebar__item-name">
                                                    Báo cáo</span></span>
                                            </span>
                                        </router-link>
                                        <router-link to="/features" className="tree__action sidebar__action">
                                            <span aria-current="page" className="tree__link nuxt-link-exact-active nuxt-link-active">
                                                <i className="tree__icon fa-solid fa-fire me-1" />
                                                <span className="tree__link-text"><span className="sidebar__item-name">Phân tích</span></span>
                                            </span>
                                        </router-link>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="contact">Contact Us</h5>
                                    <ul className="list-unstyled" style={{ textAlign: 'start' }}>
                                        <li><i className="fa-solid fa-map-location-dot" /> Thanh Xuân, Hà Nội</li>
                                        <li><i className="fa fa-phone" /><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                                        <li>
                                            <i className="fa fa-envelope" /><a href="mailto:support@smartnote.com">support@haskslearning.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="Follow">Follow Us</h5>
                                    <div className="social-icons">
                                        <a><i className="fa-brands fa-facebook" /></a>
                                        <a><i className="fa-brands fa-instagram" /></a>
                                        <a><i className="fa-brands fa-square-twitter" /></a>
                                        <a><i className="fa-brands fa-telegram" /></a>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-start text-light mt-3 pb-1" style={{ backgroundColor: 'black', marginBottom: '-15px', paddingLeft: 100, paddingTop: 15, display: 'flex' }}>
                            <p className="copy">© 2024 Hacks learning. All Rights Reserved.</p>
                            <p className="privacy" style={{ float: 'right', position: 'absolute', right: 100 }}>Privacy Policy</p>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;
