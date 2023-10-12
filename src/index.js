import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Views/Home/Home'
import Sports from './Views/Sports/Sports';
import About  from './Views/About/About'
import Help from './Views/Help/Help'
import Ourservices from './Views/Ourservices/Ourservices'



const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home/>
  },
  { 
    path: '/Sports',
    element: <Sports/>
  },  { 
    path: '/Our services',
    element: <Ourservices/>
  },  { 
    path: '/About',
    element: <About/>
  },  { 
    path: '/Help',
    element: <Help/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router}/>
  </>
);

