import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardComponent from './components/dashboard/dashobard-component';
import NotFoundComponent from './components/notfound/notfound-component';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="dashboard/*" element={<DashboardComponent />} />

        {/* Rota para a mensagem de rota não encontrada */}
        <Route element={<NotFoundComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;