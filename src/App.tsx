import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/MuRouter';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;