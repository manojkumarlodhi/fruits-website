import { useState } from 'react'
import viteLogo from '/mylogo.jpg'  //for fevicon icon 
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from "./Components/Header.jsx"
import Contact from './Components/Contact.jsx'
import Dry_fruit from './Components/Dry_fruit.jsx'
import Fresh_fruit from './Components/fresh_fruit.jsx'
import Home from './Components/Home.jsx'
import Immunity_booster from './Components/Immunity_booster.jsx'
import Categories from './Components/Categories.jsx'
import Admin from './Components/Admin.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'



function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresh-fruit" element={<Fresh_fruit />} />
        <Route path="/immunity_booster" element={<Immunity_booster />} />
        <Route path="/dry_fruit" element={<Dry_fruit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
        

       
       

          
        </Routes>
      </Router>
    </>
  )
}

export default App
