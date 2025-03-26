import React from 'react';
import './App.css';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import Cards from './components/cards.jsx';
import Carusel from './components/carusel.jsx';


import HardSkills from './components/skills.jsx';
function App() {
  return (

    <div className="bg-black" >

      <NavBar />
      
      <Carusel />
      <Cards/>
      <HardSkills/>
    
      <Footer />
    </div>
  )
}

export default App;
