import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import './Dashboard.css';
import SwiggyLogo from './assets/SwiggyLogo.png';

function Dashboard() {
    const [timeFilter, setTimeFilter] = useState('7 Days');
    const [foodFilter, setFoodFilter] = useState('Veg');
    const [locationFilter, setLocationFilter] = useState('Hyderabad');


    const [cardData, setCardData] = useState({ weekOrders: 18, monthOrders: 100, topFood: 'Veg' });

    const getCardData = (time, food, location) => {
        if (time === '7 Days' && food === 'Veg') return { weekOrders: 18, monthOrders: 100, topFood: 'Veg' };
        if (time === 'This Month' && food === 'Non-Veg') return { weekOrders: 25, monthOrders: 120, topFood: 'Non-Veg' };
        if (time === 'Last Month' && food === 'Snacks') return { weekOrders: 10, monthOrders: 80, topFood: 'Snacks' };
        if (time === 'This Year' && food === 'Desserts') return { weekOrders: 50, monthOrders: 400, topFood: 'Desserts' };
        return { weekOrders: 18, monthOrders: 100, topFood: 'Veg' };
    };

    useEffect(() => {
        setCardData(getCardData(timeFilter, foodFilter, locationFilter));
    }, [timeFilter, foodFilter, locationFilter]);

    useEffect(() => {
        const chart1 = new ApexCharts(document.querySelector('#vegNonveg'), {
            chart: { type: 'pie', height: 320 },
            series: [60, 40],
            labels: ['Veg', 'Non-Veg'],
            colors: ['#00E396', '#FF4560'],
            title: { text: 'Veg vs Non-Veg', align: 'center', margin: 20, style: { fontSize: '24px', fontWeight: 'bold', color: '#263238' } },
        });

        const chart2 = new ApexCharts(document.querySelector('#timeOrders'), {
            chart: { type: 'area', height: 320 },
            series: [{ name: 'Orders', data: [10, 30, 50, 80, 120, 70, 40] }],
            xaxis: { categories: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'] },
            colors: ['#FF9800'],
            stroke: { curve: 'smooth' },
            title: { text: 'Orders by Time', align: 'center', margin: 20, style: { fontSize: '24px', fontWeight: 'bold', color: '#263238' } },
        });

        const chart3 = new ApexCharts(document.querySelector('#dayOrders'), {
            chart: { type: 'bar', height: 320 },
            series: [{ name: 'Orders', data: [120, 180, 240, 300, 280, 350, 200] }],
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            colors: ['#FF6F00'],
            title: { text: 'Orders by Day', align: 'center', margin: 20, style: { fontSize: '24px', fontWeight: 'bold', color: '#263238' } },
        });

        const chart4 = new ApexCharts(document.querySelector('#heatmap'), {
            chart: { type: 'bar', height: 380 },
            series: [{ name: 'Orders', data: [120, 180, 240, 300, 280, 350, 200, 260, 310, 400, 370, 450] }],
            plotOptions: { bar: { borderRadius: 10, columnWidth: '50%' } },
            dataLabels: { enabled: false },
            stroke: { width: 0 },
            grid: { row: { colors: ['#fff', '#f9f9f9'] } },
            xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { rotate: -45 }, tickPlacement: 'on' },
            yaxis: { title: { text: 'Orders' } },
            fill: { colors: ['#FF9800'], type: 'solid' },
            annotations: { points: [{ x: 'Jun', seriesIndex: 0, label: { borderColor: '#FF9800', offsetY: 0, style: { color: '#fff', background: '#FF9800' }, text: 'Highest orders' } }] },
            title: { text: 'Monthly Orders', align: 'center', margin: 20, style: { color: 'black', fontSize: '24px', fontWeight: 'bold' } },
        });

        const spark1 = new ApexCharts(document.querySelector('#spark1'), { chart: { type: 'area', height: 50, sparkline: { enabled: true } }, series: [{ data: [10, 15, 12, 20, 18, 25] }], stroke: { curve: 'smooth', width: 2 }, colors: ['#00E396'] });
        const spark2 = new ApexCharts(document.querySelector('#spark2'), { chart: { type: 'area', height: 50, sparkline: { enabled: true } }, series: [{ data: [80, 90, 100, 95, 120, 110] }], stroke: { curve: 'smooth', width: 2 }, colors: ['#FF9800'] });
        const spark3 = new ApexCharts(document.querySelector('#spark3'), { chart: { type: 'area', height: 50, sparkline: { enabled: true } }, series: [{ data: [3, 4, 5, 4, 6, 5] }], stroke: { curve: 'smooth', width: 2 }, colors: ['#FF4560'] });
        const spark4 = new ApexCharts(document.querySelector('#spark4'), { chart: { type: 'area', height: 50, sparkline: { enabled: true } }, series: [{ data: [5, 8, 6, 10, 7, 9] }], stroke: { curve: 'smooth', width: 2 }, colors: ['#FFA500'] });

        chart1.render(); chart2.render(); chart3.render(); chart4.render();
        spark1.render(); spark2.render(); spark3.render(); spark4.render();

        return () => { chart1.destroy(); chart2.destroy(); chart3.destroy(); chart4.destroy(); spark1.destroy(); spark2.destroy(); spark3.destroy(); spark4.destroy(); };
    }, []);

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="header-left">
                    <img src={SwiggyLogo} alt="Swiggy Logo" className="swiggy-logo" />
                    <h1>Swiggy Analytics Dashboard</h1>
                </div>
            </header>

            <div className="top-cards">
                <div className="card">
                    <h3>Orders of Week 📈</h3>
                    <p className='circle'>{cardData.weekOrders}</p>
                    <div id="spark1" style={{ height: '50px', width: '100%' }}></div>
                </div>
                <div className="card">
                    <h3>Orders of Month 📊</h3>
                    <p className='circle'>{cardData.monthOrders}</p>
                    <div id="spark2" style={{ height: '50px', width: '100%' }}></div>
                </div>
                <div className="card">
                    <h3>Coupons Available 🎁</h3>
                    <p className='circle'>05</p>
                    <div id="spark3" style={{ height: '50px', width: '100%' }}></div>
                </div>
                <div className="card">
                    <h3>Top Food Category 🍕</h3>
                    <p className='circle circle-text'>{cardData.topFood}</p> 
                    <div id="spark4" style={{ height: '50px', width: '100%' }}></div>
                </div>
            </div>

            {/* Filters */}
            <div className="chips-filter">
                <div className="chip-group">
                    <h3>Time</h3>
                    <div className="chips">
                        {['7 Days','This Month','Last Month','This Year'].map(t =>
                            <button key={t} className={`chip ${timeFilter===t?'active':''}`} onClick={() => setTimeFilter(t)}>{t}</button>
                        )}
                    </div>
                </div>
                <div className="chip-group">
                    <h3>Food Type</h3>
                    <div className="chips">
                        {['Veg','Non-Veg','Snacks','Desserts'].map(f =>
                            <button key={f} className={`chip ${foodFilter===f?'active':''}`} onClick={() => setFoodFilter(f)}>{f}</button>
                        )}
                    </div>
                </div>
                <div className="chip-group">
                    <h3>Location</h3>
                    <div className="chips">
                        {['Hyderabad','Bangalore','Chennai'].map(l =>
                            <button key={l} className={`chip ${locationFilter===l?'active':''}`} onClick={() => setLocationFilter(l)}>{l}</button>
                        )}
                    </div>
                </div>
            </div>

            <div className="analytics-header-card">
                <h2>Analytics Overview</h2>
            </div>

            <div className="chart-row">
                <div id="vegNonveg" className="chart-card"></div>
                <div id="timeOrders" className="chart-card"></div>
                <div id="dayOrders" className="chart-card"></div>
            </div>
            <div className="heatmap-row">
                <div id="heatmap" className="chart-card heatmap-card"></div>
            </div>
        </div>
    );
}

export default Dashboard;
