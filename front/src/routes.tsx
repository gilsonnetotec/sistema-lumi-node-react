import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardComponent from './components/dashboardComponents/dashobard-component';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="dashboard/*" element={<DashboardComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;