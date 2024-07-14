// src/components/StudyProcess.js
import React from 'react';
import './StudyProcess.scss';

const calculateAverage = (subjects) => {
    if (subjects.length === 0) return 0;
    
    const total = subjects.reduce((sum, subject) => sum + subject.score, 0);
    return (total / subjects.length).toFixed(2); // Ensure average is fixed to 2 decimal places
};

const getRank = (average) => {
    if (average >= 9) return 'xuất sắc';
    if (average >= 8) return 'giỏi';
    if (average >= 6.5) return 'khá';
    if (average >= 5) return 'trung bình';
    return 'yếu';
};

const StudyProcess = ({ data }) => {
    return (
        <div className="study-process">
            {data.map((yearData, index) => {
                const average = calculateAverage(yearData.subjects);
                const rank = getRank(average);
                
                return (
                    <div key={index} className="year-data">
                        <h2>{yearData.year}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Môn học</th>
                                    <th>Điểm số</th>
                                </tr>
                            </thead>
                            <tbody>
                                {yearData.subjects.map((subject, subIndex) => (
                                    <tr key={subIndex}>
                                        <td>{subject.name}</td>
                                        <td>{subject.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="average">
                            <strong>Điểm trung bình:</strong> {parseFloat(average).toFixed(2)} {/* Parse and fix to 2 decimal places */}
                        </div>
                        <div className={`rank ${rank.replace(' ', '-').toLowerCase()}`}>
                            <strong>Xếp loại:</strong> {rank.charAt(0).toUpperCase() + rank.slice(1)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StudyProcess;
