import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/DashBoardLayout.scss';

import StudyProcess from '../components/StudyProcess/StudyProcess';
import data from '../data.json';
import { setStudentData, selectStudentData } from '../redux/studentSlice';
import { NavLink } from 'react-router-dom';

const DashBoardLayout = () => {
    const [studentId, setStudentId] = useState('');
    const dispatch = useDispatch();
    const studentData = useSelector(selectStudentData);

    const handleSearch = () => {    
        console.log('Searching for student ID:', studentId);
        const filteredData = data.filter(item => item.studentId === studentId);
        dispatch(setStudentData(filteredData)); // Dispatch action để lưu dữ liệu lên Redux
        console.log('Filtered data:', filteredData);
    };

    return (
        <div className='container position-static' style={{ marginTop: '100px' }}>
            <h1 className='mb-5'> <i>Dashboard</i></h1>
            <div className='search_msv' style={{ display: 'flex', justifyContent: 'center' }}>
                <input
                    placeholder="Nhập số báo danh"
                    className="input_msv"
                    name="msv"
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <button className="btn_msv" onClick={handleSearch}>Tìm kiếm</button>
            </div>
            {studentData.length > 0 ? (
                <div className='scores'>
                    <h2 className='mt-5'><i>Quá trình học tập của <span className='text-success'>{studentData[0].name}</span></i></h2>
                    <StudyProcess data={studentData} />
                </div>
            ) : (
                <div className='mt-5'>
                    <p className="text-center">Không tìm thấy thông tin cho mã học sinh này.</p>
                </div>
            )}
            <div className='chart'>
                <NavLink to='/home/chart'>
                    <button class="cta">
                        <span>Xem dữ liệu học tập</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default DashBoardLayout;
