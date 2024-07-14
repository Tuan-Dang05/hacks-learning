import React, { useState } from 'react';
import './AddEditScore.scss';

const AddEditScore = ({ score, onSave }) => {
    const [subject, setSubject] = useState(score ? score.subject : '');
    const [scoreValue, setScoreValue] = useState(score ? score.scoreValue : '');
    const [type, setType] = useState(score ? score.type : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ subject, scoreValue, type });
    };

    return (
        <div className="card">
            <h2>{score ? 'Sửa' : 'Thêm'} Điểm</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Môn:
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Điểm:
                    <input
                        type="number"
                        value={scoreValue}
                        onChange={(e) => setScoreValue(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Loại:
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
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

export default AddEditScore;
