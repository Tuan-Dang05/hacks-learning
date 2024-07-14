// src/components/Modal.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../../redux/inputValueSlice';
import { useNavigate } from 'react-router-dom';
import './search.scss'; // Đảm bảo import file CSS cho component Modal

const Modal = ({ isVisible, onClose }) => {
    const [inputValueLocal, setInputValueLocal] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValueLocal(e.target.value);
    };

    const handleSearch = () => {
        dispatch(setInputValue(inputValueLocal)); // Lưu giá trị vào Redux store
        navigate(`/home/diemthi`); // Điều hướng và truyền sbd vào query parameter
    };
    return (
        <div className={`modal-overlay ${isVisible ? 'show' : ''}`} onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="group">
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                                </g>
                            </svg>
                            <input
                                placeholder="Nhập số báo danh"
                                type="search"
                                className="search"
                                value={inputValueLocal}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type='button' onClick={handleSearch}>Tìm</button>
                    </div>
                    <div className="modal-body" style={{ fontSize: '12px', color: 'gray' }}>
                        <span>
                            <i className="far fa-clock me-2"></i>
                            Gần đây
                        </span>
                        <br />
                        <span>
                            <i className="far fa-clock me-2 mt-3"></i>
                            1 tháng gần đây
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
