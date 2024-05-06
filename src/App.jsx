
import './App.css'
// import Chart from './pages/Chart';

import Router from './config/Router';
import React from 'react';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router /> 
    </UserProvider>
  );
};

export default App;
