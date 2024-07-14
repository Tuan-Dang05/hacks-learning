import React from 'react';
import './ScoreList.scss';

const ScoreList = ({ scores, onEdit, onDelete }) => {
    return (
        <div className="card">
            <h2>Danh Sách Điểm</h2>
            <table>
                <thead>
                    <tr>
                        <th>Môn</th>
                        <th>Điểm</th>
                        <th>Loại</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.subject}</td>
                            <td>{score.scoreValue}</td>
                            <td>{score.type}</td>
                            <td>
                                <button onClick={() => onEdit(score)} className="button">Sửa</button>
                                <button onClick={() => onDelete(score)} className="button">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScoreList;
