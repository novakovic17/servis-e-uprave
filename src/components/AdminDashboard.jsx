import React from 'react';
import Chart from './Chart';
import './AdminDashboard.css';

const AdminDashboard = ({ zakazivanja, vakcine }) => {
 
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__title">
        <h1>Daily Reports</h1>
        <p>Belgrade, Serbia</p>
      </div>

      <div className="admin-dashboard__charts">
        <div className="admin-dashboard__chart">
          <Chart zakazivanja={zakazivanja} vakcine={vakcine} />
        </div>
      
      </div>
    </div>
  );
};

export default AdminDashboard;
