import React from 'react';
import './Feature.scss';
import logo from '../../assets/images/logo.png'
const Feature = () => {
    return (
        <div style={{ zIndex: '9999', color: 'black' }}>
            <div className='row'>
                <div className='col-8 tinhNang'>
                    <p>Khám phá các tính năng giúp bạn thành công trong học tập</p>
                    <hr className='w-50' style={{ marginBottom: '30px' }} />
                    <div className='quan_ly col-5'>
                        <span>
                            <i class="fas fa-user-graduate me-2 fs-5"></i>
                            <span className='fs-5'>Quản lý</span>
                        </span>
                        <p className='mt-2' style={{ fontSize: '14px' }}>Hệ thống quản lý học sinh cung cấp cho bạn bộ công cụ toàn diện
                            để quản lý thông tin học sinh một cách dễ dàng và hiệu quả.
                        </p>

                        <span>
                            <i class="fas fa-search me-2 fs-5"></i>
                            <span className='fs-5'>
                                Tra cứu
                            </span>
                        </span>
                        <p className='mt-2' style={{ fontSize: '14px' }}>
                            Phụ huynh chỉ cần nhập mã học sinh của con em mình để tra cứu điểm tất cả các môn học,
                            theo từng học kỳ hoặc theo năm học.
                        </p>
                    </div>
                    <div className='quan_ly col-5 ms-5'>
                    <span>
                    <i class="fas fa-scroll me-2 fs-5"></i>
                            <span className='fs-5'>Báo cáo</span>
                        </span>
                        <p className='mt-2' style={{ fontSize: '14px' }}>
                        Cung cấp báo cáo cập nhật điểm số và kết quả học tập của học sinh theo từng môn học, theo từng lớp học hoặc theo toàn trường.
                        </p>

                        <span>
                        <i class="fas fa-chart-line me-2 fs-5"></i>
                            <span className='fs-5'>
                                Phân tích
                            </span>
                        </span>
                        <p className='mt-2' style={{ fontSize: '14px' }}>
                        Hệ thống cho phép phân tích dữ liệu học tập theo nhiều tiêu chí khác nhau như học sinh, lớp học, khối học, môn học, thời gian học,...
                        </p>
                    </div>
                </div>
                <div className='col-4 '>
                    <div className=''>
                        <img src={logo} alt="logo" width={250} style={{position: 'absolute', right: '0', top: '0', marginTop: '100px', marginRight: '100px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
