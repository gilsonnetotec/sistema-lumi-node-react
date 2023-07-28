import React from 'react';
import AppRoutes from "./routes"; 

const App: React.FC = () => {
  return (
    <div>
      <AppRoutes /> {/* Renderiza o componente de rotas (se aplicável). */}
    </div>
  );
};

export default App;