
import './App.css';
import { Home, Contact, Architecture, Project1, Project2, Joinus }  from './Paginas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Componenten/Navbar';
import Footer from './Componenten/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <Router>
     <div className="application">
            <Helmet>
                <style>{'body { background-color: #C2F1E5; }'}</style>
            </Helmet>
            ...
    </div>
    <div className="App">
      <Navbar />
      <Footer/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/architecture" element={<Architecture/>}/>
          <Route path="/project1" element={<Project1/>}/>
          <Route path="/project2" element={<Project2/>}/>
          <Route path="/joinus" element={<Joinus/>}/>
          
        </Routes>
       
      </div>
    </div>
    </Router>
  )
    
    }

export default App;
