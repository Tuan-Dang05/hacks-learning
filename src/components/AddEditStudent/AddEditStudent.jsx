import React, { useState } from 'react';
import './add.scss';

const AddEditStudent = ({ student, onSave }) => {
    const [name, setName] = useState(student ? student.name : '');
    const [age, setAge] = useState(student ? student.age : '');
    const [className, setClassName] = useState(student ? student.className : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, age, className });
    };

    return (
        <div className="card">
            <h2>{student ? 'Sửa' : 'Thêm'} Học Sinh</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tên:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Tuổi:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Lớp:
                    <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="button">
                    Lưu
                </button>
            </form>
        </div>
    );
};

export default AddEditStudent;
