import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import 'dotenv/config'

const TotNghiep = () => {
    const inputValue = useSelector((state) => state.inputValue.value);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:5000/api/diemthi?sbd=${inputValue}`);
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                setError(error.message || 'Failed to fetch data');
            } finally {
                setIsLoading(false);
            }
        }

        if (inputValue) {
            fetchData();
        }
    }, [inputValue]);

    if (isLoading) {
        return <p style={{marginTop:'200px', textAlign:'center'}}>Chưa có dữ liệu điểm...</p>;
    }

    if (error) {
        return <p style={{marginTop:'200px', textAlign:'center'}}>{error}</p>;
    }

    return (
        <div className='container' style={{ marginTop: '120px' }}>
            <h1 className='text-center'>Dữ liệu điểm thi tốt nghiệp năm 2023</h1>
            <h3>Số báo danh: <span style={{color:'red', fontWeight: '500'}}>{inputValue}</span></h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Môn</th>
                        <th>Điểm</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.subject}</td>
                            <td>{item.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TotNghiep;
