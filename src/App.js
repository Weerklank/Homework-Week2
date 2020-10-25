import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Index from "./Pages/Index"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import './css/App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Index/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
}



export default App