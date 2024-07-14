import React from 'react';
import './CalculateAverage.scss';

const CalculateAverage = ({ scores }) => {
    const calculateAverage = () => {
        if (scores.length === 0) return 0;
        const total = scores.reduce((acc, score) => acc + score.scoreValue, 0);
        return (total / scores.length).toFixed(2);
    };

    return (
        <div className="card">
            <h2>Điểm Trung Bình</h2>
            <p>{calculateAverage()}</p>
        </div>
    );
};

export default CalculateAverage;
