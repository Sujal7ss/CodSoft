import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/output.css';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root');
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
