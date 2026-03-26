import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import AppProvider from './Context/AppContext';


// Toastify import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer 
      position="top-center"
      autoClose={2000} />
    </AppProvider>
  </StrictMode>,
)
