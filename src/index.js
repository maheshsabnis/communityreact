import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductFormConponent from './components/productformcomponent';
import ToggleComponent from './components/lifecycle/tooglecomponent';
import UseRefDemoComponent from './components/userefcomponent';
const message = "I am from Parent";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* The 'msg' is props that will be added
      in 'props'
    */}
    {/* <App msg={message}/> */}
    <UseRefDemoComponent></UseRefDemoComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
