import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default () => {
  return (
    <Router>
      <Routes>
        <Route 
          exac path='/' 
          element={<Main/>}>
        </Route>
        <Route 
          path='/repository/:repository' 
          element={<Repository/>}>
        </Route>
      </Routes>
    </Router>
  );
}

