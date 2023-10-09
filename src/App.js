import React, {useState} from "react";
import "./assets/scss/main.scss";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AccessControl from "./Pages/AccessControl/AccessControl";
import Charts from "./Pages/Charts/Charts";
import User from "./Pages/User/User";
import Invoice from "./Pages/Invoice/Invoice";
import Header from "./Layout/Header/Header";
import SideMenu from "./Layout/SideMenu/SideMenu";
import Calender from "./Pages/Calender/Calender";
import Footer from "./Layout/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  return (
    <div className="app">
      <BrowserRouter>
          <SideMenu isSideMenuOpen={isSideMenuOpen}/>
          <div className="app__container">
            <Header isSideMenuOpen ={isSideMenuOpen} setIsSideMenuOpen ={setIsSideMenuOpen}/>
            <Routes>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route path="/user" element={<User/>}/>
              <Route path="/accesscontrol" element={<AccessControl/>}/>
              <Route path="/charts" element={<Charts/>}/>
              <Route path="/invoice" element={<Invoice/>}/>
              <Route path="/calender" element={<Calender/>}/>
            </Routes>
          <Footer/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
