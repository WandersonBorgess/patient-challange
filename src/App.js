import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css";

import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gray-50 app">
        <Routes />
      </div>
    </Provider>
  )
}

export default App;
