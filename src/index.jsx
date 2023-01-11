import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/normalize.css';
import './Styles/index.css';
import Home from './Pages/Home';
import ErrorPage from './Pages/404'; 
import About from './Pages/About';
import Lodging from './Pages/Lodging'
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "/about",
    element : <About />,
  },
  {
    path: "/lodging/?",
    element : <Lodging />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();