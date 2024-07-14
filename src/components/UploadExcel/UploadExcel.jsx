import React from 'react';
import * as XLSX from 'xlsx';
import './UploadExcel.scss';

const UploadExcel = ({ onUpload }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);
            onUpload(jsonData);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="card">
            <h2>Nhập Dữ Liệu Từ File Excel</h2>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default UploadExcel;
