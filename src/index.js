import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="description" content="We are a family-owned restaurant, focused on providing the best dining experience with our unique twist on traditional cuisine." />
    <meta name="og:title" content="Little Lemon" />
    <meta name="og:description" content="We are a family-owned restaurant, focused on providing the best dining experience with our unique twist on traditional cuisine." />
    <meta name="og:image" content="./restaurantchefB.jpg"/>
    <App className="App"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
