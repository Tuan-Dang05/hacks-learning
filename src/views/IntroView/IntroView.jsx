import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/HeaderIntroView/Header';
import backgroundImage from '../../assets/images/bg.jpeg';
import './Intro.scss';
import Infomation from '../../components/Infomation/infomation';
import Footer from '../../components/Footer/Footer';

class HomeView extends Component {
    render() {
        return (
            <div className="introduction">
                <div className='home-view'>

                    <div className="header">
                        <Header />
                    </div>
                    <div className="slogan_bg">
                        <img src={backgroundImage} alt="bg" className="background" />
                        <div className="content">
                            <h1 className="slogan text-light">Hacks Learning</h1>
                            <h2 className="slogan">Bí kíp học tập thông minh, hiệu quả!</h2>
                            <p className="fs-5" style={{ color: 'whitesmoke' }}> Cung cấp cho bạn những phương pháp học tập khoa học, giúp bạn tiết kiệm thời gian và đạt hiệu quả cao nhất!</p>
                            <Link to="signup">
                            <button className="dangki">
                                Đăng kí ngay !
                            </button>
                            </Link>
                        </div>
                        <p className="small-slogan">Hacks Learning - Cùng nhau chinh phục tri thức!</p>
                    </div>

                    <div className='position-absolute bottom-0'>
                        <Infomation />
                    </div>
                </div>
                <div className='position-absolute w-100' style={{marginTop: '50%'}} >
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default HomeView;
