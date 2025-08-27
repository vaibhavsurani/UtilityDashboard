import { createContext, useContext, useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './navBar.jsx';
import LocationSelector from './Components/locationSelector.jsx'
import Currency from './Components/currency.jsx'
import './App.css'
import WeatherDashboard from './Components/weather.jsx'


function App() {
  

  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Currency />} />
          <Route path="/locationselector" element={<LocationSelector />} />
          <Route path="/weather" element={<WeatherDashboard/>} />
        </Routes>
      
      </Router>

    {/* <Currency />
    <LocationSelector />
    <WeatherDashboard /> */}
    </>
  )
}

export default App
