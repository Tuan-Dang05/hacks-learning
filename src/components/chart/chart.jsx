import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import { selectStudentData } from '../../redux/studentSlice';
import './chart.scss';

const createChart = (ctx, data, type = 'bar') => {
    new Chart(ctx, {
        type: type,
        data: data,
        options: {
            scales: type === 'bar' ? {
                y: {
                    beginAtZero: true,
                },
            } : type === 'line' ? {
                y: {
                    type: 'category',
                    labels: ["Yếu", "Trung bình", "Khá", "Giỏi", "Xuất sắc"],
                    beginAtZero: true,
                },
            } : {},
            responsive: true,
            maintainAspectRatio: false,
        },
    });
};

const getChartData = (subjects) => {
    return {
        labels: subjects.map(subject => subject.name),
        datasets: [{
            label: 'Điểm số',
            data: subjects.map(subject => subject.score),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1
        }]
    };
};

const getDoughnutChartData = (studentData) => {
    const subjects = [...new Set(studentData.flatMap(item => item.subjects.map(sub => sub.name)))];

    const totalScores = {};
    const counts = {};

    studentData.forEach(item => {
        item.subjects.forEach(subject => {
            if (!totalScores[subject.name]) {
                totalScores[subject.name] = 0;
                counts[subject.name] = 0;
            }
            totalScores[subject.name] += subject.score;
            counts[subject.name] += 1;
        });
    });

    const averageScores = subjects.map(subject => (totalScores[subject] / counts[subject]));

    return {
        labels: subjects,
        datasets: [{
            label: `Điểm trung bình môn`,
            data: averageScores,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 159, 64)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    };
};

const getLineChartData = (studentData) => {
    const years = ["Lớp 10", "Lớp 11", "Lớp 12"];
    const ratings = ["Yếu", "Trung bình", "Khá", "Giỏi", "Xuất sắc"];

    const getRating = (score) => {
        if (score >= 9) return "Xuất sắc";
        if (score >= 8) return "Giỏi";
        if (score >= 7) return "Khá";
        if (score >= 5) return "Trung bình";
        return "Yếu";
    };

    const averageScoresByYear = {};
    years.forEach(year => {
        const yearData = studentData.filter(item => item.year === year);
        const totalScore = yearData.reduce((sum, item) => sum + item.subjects.reduce((subSum, sub) => subSum + sub.score, 0), 0);
        const count = yearData.reduce((sum, item) => sum + item.subjects.length, 0);
        const averageScore = count ? (totalScore / count) : 0;
        averageScoresByYear[year] = averageScore;
    });

    const ratingData = years.map(year => {
        const averageScore = averageScoresByYear[year];
        return ratings.indexOf(getRating(averageScore));
    });

    return {
        labels: years,
        datasets: [{
            label: 'Xếp loại',
            data: ratingData,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
            tension: 0.1
        }]
    };
};

const ChartComponent = () => {
    const chartRef10 = useRef(null);
    const chartRef11 = useRef(null);
    const chartRef12 = useRef(null);
    const additionalChartRef = useRef(null);
    const lineChartRef = useRef(null);
    const studentData = useSelector(selectStudentData);
    const [chartsRendered, setChartsRendered] = useState({
        chart10: false,
        chart11: false,
        chart12: false,
        additionalChart: false,
        lineChart: false
    });

    useEffect(() => {
        if (studentData.length > 0) {
            const data10 = studentData.filter(item => item.year === "Lớp 10").flatMap(item => item.subjects);
            const data11 = studentData.filter(item => item.year === "Lớp 11").flatMap(item => item.subjects);
            const data12 = studentData.filter(item => item.year === "Lớp 12").flatMap(item => item.subjects);

            if (chartRef10.current && !chartsRendered.chart10) {
                createChart(chartRef10.current.getContext('2d'), getChartData(data10));
                setChartsRendered(prev => ({ ...prev, chart10: true }));
            }

            if (chartRef11.current && !chartsRendered.chart11) {
                createChart(chartRef11.current.getContext('2d'), getChartData(data11));
                setChartsRendered(prev => ({ ...prev, chart11: true }));
            }

            if (chartRef12.current && !chartsRendered.chart12) {
                createChart(chartRef12.current.getContext('2d'), getChartData(data12));
                setChartsRendered(prev => ({ ...prev, chart12: true }));
            }

            if (additionalChartRef.current && !chartsRendered.additionalChart) {
                createChart(additionalChartRef.current.getContext('2d'), getDoughnutChartData(studentData), 'doughnut');
                setChartsRendered(prev => ({ ...prev, additionalChart: true }));
            }

            if (lineChartRef.current && !chartsRendered.lineChart) {
                createChart(lineChartRef.current.getContext('2d'), getLineChartData(studentData), 'line');
                setChartsRendered(prev => ({ ...prev, lineChart: true }));
            }
        }
    }, [studentData, chartsRendered]);

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <h1>Biểu đồ điểm học tập</h1>
            <div className='chart-grid'>
                <div className='chart-container'>
                    <h2>Lớp 10</h2>
                    <canvas ref={chartRef10} id="chart10"></canvas>
                </div>
                <div className='chart-container'>
                    <h2>Lớp 11</h2>
                    <canvas ref={chartRef11} id="chart11"></canvas>
                </div>
                <div className='chart-container'>
                    <h2>Lớp 12</h2>
                    <canvas ref={chartRef12} id="chart12"></canvas>
                </div>
                <div className='chart-container'>
                    <h2>Biểu đồ bổ sung</h2>
                    <canvas ref={additionalChartRef} id="additionalChart"></canvas>
                </div>
                <div className='chart-container'>
                    <h2>Biểu đồ đường</h2>
                    <canvas ref={lineChartRef} id="lineChart"></canvas>
                </div>
            </div>
        </div>
    );
}

export default ChartComponent;
