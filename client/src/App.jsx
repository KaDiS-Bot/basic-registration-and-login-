import React from 'react'
import axios from 'axios';
import {Toaster} from "react-hot-toast";
axios.defaults.baseURL = "http://localhost:8008"
axios.defaults.withCredentials=true;
const App = () => {
  return (
    <div>Hello world
    </div>
  )
}

export default App