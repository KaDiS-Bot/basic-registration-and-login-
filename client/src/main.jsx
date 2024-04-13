import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import {Toaster} from "react-hot-toast";
import { UserContextProvider } from '../context/userContext.jsx'
import Dashboard from './pages/Dashboard.jsx'

const router=createBrowserRouter([
  {path:"/",
  element:<HomePage />},
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/dashboard",
    element:<Dashboard />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> <UserContextProvider>
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
